var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (i = 0; i < 15; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(
          "Penumpang dengan nama " + namaPenumpang + " sudah berada dikursi"
        );
        return penumpang;
      } else if (penumpang.length >= 15) {
        console.log("Penumpang sudah penuh!");
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong!");
    return penumpang;
  } else {
    for (i = 0; i < 15; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (!penumpang.includes(namaPenumpang)) {
        console.log("Tidak ada penumpang dengan nama " + namaPenumpang);
        return penumpang;
      }
    }
  }
};
