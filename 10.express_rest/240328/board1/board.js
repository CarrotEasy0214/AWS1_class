const a = async () => {
  try {
    const listitem = await fetch("127.0.0.1/getlist", { method: "post" });
    const listtext = await listitem.text();
    const list = JSON.parse(listtext);

    console.log(list);
  } catch (err) {
    console.log(err);
  }
};

a();
