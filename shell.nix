with import <nixpkgs> {};

mkShell {
    buildInputs = [
        nodejs-14_x
    ];
    src = null;
    shellHook = ''
        mkdir -p .nix-node
        export NODE_PATH=$PWD/.nix-node
        export NPM_CONFIG_PREFIX=$PWD/.nix-node
        export PATH=$NODE_PATH/bin:$PATH
    '';

}