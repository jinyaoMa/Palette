class Color {
  constructor(r, g, b) {
    this.R = Math.floor(r);
    this.G = Math.floor(g);
    this.B = Math.floor(b);
  }
  localeCompare(that) {
    return this.toString().localeCompare(that.toString());
  }
  toString() {
    let r = (this.R < 16 ? '0' : '') + this.R.toString(16);
    let g = (this.G < 16 ? '0' : '') + this.G.toString(16);
    let b = (this.B < 16 ? '0' : '') + this.B.toString(16);
    return `#${r}${g}${b}`;
  }
}

export default Color;