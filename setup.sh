#!/bin/bash

pushd my-context
yarn
yarn link
popd

pushd my-component
yarn
yarn link my-context
yarn build
popd

pushd my-app
yarn
yarn link my-context
popd
