#!/bin/zsh
set -euxo pipefail

BASEDIR="$(pwd)"
APPBUNDLE=$1
FRAMEWORKS_PATH="${APPBUNDLE}/Contents/Frameworks/"
WORKINGDIR="$(pwd)"

# - Build both arm64 (Apple Silicon) and x86_64 (Intel)
# - Require a minimum of macOS 11.0
# - Include the /src/ directory for headers (for `tree_sitter/parser.h`)
BUILD_FLAGS="-arch arm64 -arch x86_64 -mmacosx-version-min=11.0 -I'${BASEDIR}'/tree-sitter-pkl/src/"

# Build in a temporary `build/` directory.
TMP_BUILD_DIR=$WORKINGDIR/build
mkdir -p $TMP_BUILD_DIR

pushd $BASEDIR

CFLAGS="${BUILD_FLAGS} -O3" \
CXXFLAGS="${BUILD_FLAGS} -O3" \
LDFLAGS="${BUILD_FLAGS} -F${FRAMEWORKS_PATH} -framework SyntaxKit -rpath @loader_path/../Frameworks" \
PREFIX="$TMP_BUILD_DIR" make install
mv ${WORKINGDIR}/libtree-sitter-pkl.dylib ${WORKINGDIR}/pkl.novaextension/Syntaxes/
popd
