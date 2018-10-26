import gorgame from "gorngin/gorgame/gorgame";

const svc = {};
svc.get = () => {
  const onscreen = {};

  onscreen.cliniclobby = gorgame.add.sprite({
    x: 0,
    y: 0,
    img: "nightcliniclobby",
    animation: []
  });

  return onscreen;
};
export default svc;
