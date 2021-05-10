const stand = new Entity();
stand.addComponent(new BoxShape());
stand.addComponent(new Transform({ position: new Vector3(8, 0, 8) }));
engine.addEntity(stand);

const avatar = new Entity();
const avatarShape = new AvatarShape();

avatarShape.name = `Mirror`;

avatarShape.bodyShape = "dcl://base-avatars/BaseFemale";
avatarShape.wearables = [
  "dcl://base-avatars/f_sweater",
  "dcl://base-avatars/f_jeans",
  "dcl://base-avatars/bun_shoes",
  "dcl://base-avatars/standard_hair",
  "dcl://base-avatars/f_eyes_00",
  "dcl://base-avatars/f_eyebrows_00",
  "dcl://base-avatars/f_mouth_00",
];
avatarShape.skinColor = new Color4(0.94921875, 0.76171875, 0.6484375, 1);
avatarShape.eyeColor = new Color4(0.23046875, 0.625, 0.3125, 1);
avatarShape.hairColor = new Color4(0.234375, 0.12890625, 0.04296875, 1);
avatar.addComponent(avatarShape);
avatar.addComponent(new Transform({ position: new Vector3(8, 0.5, 8) }));
engine.addEntity(avatar);

const update = new Entity();
update.addComponent(new BoxShape());
update.addComponent(new Material());
update.getComponent(Material).albedoColor = new Color3(0,1,0)
update.addComponent(new Transform({ position: new Vector3(6, 1, 8), scale: new Vector3(0.5, 0.5, 0.5) }));
engine.addEntity(update);

update.addComponent(new OnClick(()=>{
  avatarShape.name = "abc"
}))