module.exports = {
  sayHi: () => {
    const array = Array.from({ length: 1000000 }, () => "hi");
    return array.join(" ");
  },
};
