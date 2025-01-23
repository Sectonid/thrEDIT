function Export( scene ) {
  let sky = ["[sub_resource type='Sky' id='Sky']"];
  let environment = ["[sub_resource type='Environment' id='Environment']"];
  if (scene["background"]["isColor"]) {
    environment.add("background_mode = 1");
    environment.add("background_color = Color(" + scene['background']['r'] + ", " + scene['background']['g'] + ", " + scene['background']['b'] + ")");
  }
  elseif (scene["background"]["isTexture"]) {environment.add("background_mode = 2")};
  else {environment.add("background_mode = 4")};

  for (obj, scene["objects"], obj++) {
    pass;
  }

}
