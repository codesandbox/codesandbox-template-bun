with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "bun";
    buildInputs = [
        bun
    ];
}