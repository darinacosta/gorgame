import inventorySvc from "gorngin/inventory/inventorySvc";
import overlayMenu from "services/menu/overlayMenu";

const svc = {};

svc.getText = () => {
  let indexBody = "";
  let tags = "n-ITEMS, nospeech";
  const items = inventorySvc.getPossessedItems();
  const itemArray = [];
  for (let i = 0; i < items.length; i += 1) {
    indexBody += `[[${items[i].name}|${items[i].id}]]\n\n`;
    itemArray.push({
      title: items[i].id,
      tags: `n-${items[i].name.toUpperCase()}, nospeech, next-init`,
      body: items[i].description,
      position: {
        x: 635,
        y: 58
      }
    });
  }
  if (items.length === 0) {
    indexBody += "There are currently no items in your possession.";
  } else {
    tags += ", forcename";
  }
  itemArray.push({
    title: "init",
    tags,
    body: indexBody,
    position: {
      x: 635,
      y: 58
    }
  });
  return itemArray;
};

svc.createItemMenu = () => {
  overlayMenu.createOverlay({
    dialogue: svc.getText(),
    initElement: "init",
    cb: () => {
      svc.killItemMenu();
    },
    background: false,
    delay: 200
  });
};

svc.killItemMenu = () => {
  overlayMenu.killOverlay();
};

inventorySvc.gainPossession("motorcycle-fuse");
inventorySvc.gainPossession("crabcake");

export default svc;
