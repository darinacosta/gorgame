/*
  Module: NPC Control
  Author: D
  Description:
*/

/*
  Module: NPC Control
  Author: D
  Description:
*/

/*
  Module: NPC Control
  Author: D
  Description:
*/

/*
  Module: NPC Control
  Author: D
  Description:
*/
import app, { game } from "services/app";

const svc = {};

// Service variables
const experienceFontStyle = {
  font: "15px munroregular",
  fill: "#E4DF39",
  align: "center"
};

/*
  Define class behavior for all enemy sprites
*/

function _receivePlayerAttack(handler, self, xp, deathSound) {
  game.physics.arcade.overlap(
    app.stateManager.puc.bullets,
    self,
    function(enemy, bullet) {
      handler.health -= app.stateManager.sts.attackValue();

      // Animate enemy hit unless fading out from death
      if (handler.health > 0) {
        bullet.kill();
        game.sound.play("takingdamage", app.config.soundfx || 0.3, false);
        self.tint = 0xfb0000;
      }

      if (handler.health < 0 && handler.alive) {
        // Prevent repeat deaths
        handler.alive = false;

        // Gain xp
        app.stateManager.sts.xp += xp;

        // Animate xp
        const xpText = game.add.text(
          self.x + 15,
          self.y,
          `+${xp}`,
          experienceFontStyle
        );
        xpText.alpha = 0;
        fadeInXp = game.add
          .tween(xpText)
          .to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true)
          .start();
        fadeOutXp = fadeInXp.onComplete.add(() => {
          game.add
            .tween(xpText)
            .to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true)
            .start();
        }, this);

        // Animate enemy death
        game.sound.play(deathSound, app.config.soundfx || 1.5, false);
        self.tint = 0xfb0000;
        fadeOutEnemy = game.add
          .tween(self)
          .to({ alpha: 0 }, 400, Phaser.Easing.Linear.None, true)
          .start();
        fadeOutEnemy.onComplete.add(() => {
          self.destroy();
        });
      }
    },
    null,
    this
  );
  return handler;
}

/*
  Drone 1
  - Images:'drone1', 'bluebeam';
*/

svc.Drone1 = function(health, startX, endX, y) {
  this.health = health;
  this.y = y;
  this.startX = startX;
  this.endX = endX;
  this.alive = true;

  this.sprite = function() {
    const drone1 = game.add.sprite(
      game.world.x + this.startX,
      this.y,
      "drone1"
    );
    game.physics.enable(drone1, Phaser.Physics.ARCADE);
    drone1.body.collideWorldBounds = true;
    drone1.body.allowGravity = false;
    drone1.body.setSize(50, 70, 0, 0);
    game.add
      .tween(drone1)
      .to(
        { x: game.world.x + this.endX, y: this.y },
        9000 + 3000 * Math.random(),
        Phaser.Easing.Quadratic.InOut,
        true,
        0,
        Infinity,
        true
      );
    return drone1;
  };

  this.bullets = (function() {
    const bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(50, "bluebeam");
    bullets.setAll("checkWorldBounds", true);
    bullets.setAll("outOfBoundsKill", true);

    return bullets;
  })();

  this.update = function(handler, self, bullets) {
    self.tint = 0xffffff;
    _shootBeam(self, bullets);
    handler = _receiveAttack(handler, self);
    return handler;
  };

  function _shootBeam(self, bullets) {
    if (
      self.alive &&
      player.x > self.x - 20 &&
      player.x < self.x + 20 &&
      !app.dialogueManager.dialogueInitialized &&
      bullets.countDead() > 20
    ) {
      game.sound.play("laser", app.config.soundfx || 0.04, false);
      const bullet = bullets.getFirstDead();
      bullet.reset(self.x + 20, self.y + 60);
      bullet.body.setSize(25, 25, -15, 0);
      if (self.x > self.previousPosition.x) {
        game.physics.arcade.moveToXY(bullet, self.x + 30, 350, 650);
      } else {
        game.physics.arcade.moveToXY(bullet, self.x, 350, 650);
      }
    }
  }

  function _receiveAttack(handler, self) {
    return _receivePlayerAttack(handler, self, 10, "explosion");
  }
}; // End Drone 1

/*
  Drone 2
  - Images:'drone2';
*/

svc.Drone2 = function(health, startX, endX, startY, endY) {
  this.health = health;
  this.startY = startY;
  this.endY = endY;
  this.startY = startY;
  this.startX = startX;
  this.endX = endX;
  this.alive = true;
  this.velocity = 1;

  this.sprite = function() {
    const drone2 = game.add.sprite(startX, startY, "drone2");
    game.physics.enable(drone2, Phaser.Physics.ARCADE);
    drone2.body.collideWorldBounds = true;
    drone2.body.allowGravity = false;
    drone2.body.setSize(50, 70, 0, 0);
    drone2.anchor.set(0.5);
    drone2.body.velocity.y = 1;
    return drone2;
  };

  this.bullets = (function() {
    const bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(50, "whitebeam");
    bullets.setAll("checkWorldBounds", true);
    bullets.setAll("outOfBoundsKill", true);
    bullets.setAll("anchor.x", 0.5);
    bullets.setAll("anchor.y", 0.5);

    return bullets;
  })();

  this.update = function(handler, self, bullets) {
    if (handler.alive) {
      const velocityXConstant = player.x > self.x ? 1 : -1;
      const velocityYConstant = function() {
        if (self.y <= game.world.centerY - 50 && self.body.velocity.y < 0) {
          handler.velocity = 1;
          return 1;
        } else if (
          self.y >= game.world.centerY + 30 &&
          self.body.velocity.y > 0
        ) {
          handler.velocity = -1;
          return -1;
        }
        return handler.velocity;
      };
      self.rotation = game.physics.arcade.angleBetween(self, player) - 89.5;
      self.body.velocity.x =
        player.body.velocity.x * (velocityXConstant * Math.random()) / 2 +
        15 * velocityXConstant;
      self.body.velocity.y = 10 * velocityYConstant();
      self.tint = 0xffffff;
      _shootBeam(self, bullets);
      handler = _receiveAttack(handler, self);
    }
    return handler;
  };

  function _shootBeam(self, bullets) {
    if (
      self.alive &&
      player.x > self.x - 350 &&
      player.x < self.x + 350 &&
      !app.dialogueManager.dialogueInitialized &&
      bullets.countDead() > 750 * Math.random()
    ) {
      game.sound.play("laser", 0.09, false);
      const horizontalCorrection = self.x >= player.x ? 15 : 0;
      const bullet = bullets.getFirstDead();
      bullet.reset(self.x, self.y);
      bullet.body.setSize(25, 25, -15, 0);
      bullet.anchor.set(0.5);
      bullet.lifespan = 2000;
      bullet.rotation = game.physics.arcade.angleBetween(self, player) - 89.5;
      game.physics.arcade.velocityFromRotation(
        self.body.angle,
        200,
        bullet.body.velocity
      );
      game.physics.arcade.moveToXY(
        bullet,
        player.x + horizontalCorrection,
        player.y,
        650
      );
    }
  }

  function _receiveAttack(handler, self) {
    return _receivePlayerAttack(handler, self, 10, "explosion");
  }
}; // End Drone 1

/*
  Background Birds
  -Image: 'bird'
*/

svc.Bird = function(originX, originY) {
  const x = originX - 300 + 300 * Math.random();
  const y = originY + 90 * Math.random();
  const rand = (Math.floor(Math.random() * (10 - 5 + 1)) + 5) / 10;

  this.alive = true;
  this.birdsprite = game.add.sprite(x, y, "bird");
  this.birdsprite.animations.add(
    "fly",
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17, 18],
    20 * rand + 15,
    true
  );
  game.physics.enable(this.birdsprite, Phaser.Physics.ARCADE);
  this.birdsprite.body.allowGravity = false;
  this.birdsprite.alpha = 0.6;
  this.birdsprite.body.velocity.x = -80 * rand - 30;
  this.birdsprite.lifespan = 20000;
  this.birdsprite.scale.setTo(
    this.birdsprite.scale.x * rand,
    this.birdsprite.scale.y * rand
  );
  this.birdsprite.play("fly");
};

svc.createBirds = function(x, y, n) {
  const birds = game.add.group();
  for (let i = 0; i < n; i++) {
    const bird = new svc.Bird(x, y);
    birds.add(bird.birdsprite);
  }
  return birds;
};

/*
  Hover behavior
  Description: Define hover behavior for npcs and objects.
  -Audio: initdialogue
*/

svc.clickBehavior = function(sprite) {
  if (sprite) {
    sprite.events.onInputOver.add(() => {
      game.sound.play("lightclick", 0.2, false);
      sprite.tint = 0xffff00;
    });
    sprite.events.onInputOut.add(() => {
      game.sound.play("lightclick", 0.2, false);
      sprite.tint = 0xffffff;
    });
  }
};

export default svc;
