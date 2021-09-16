This is an example repo made to demostrate something for [this issue](https://github.com/Paciolan/remote-component/issues/40).

There are three separate packages here, they can all be initialized by running `setup.sh`.

After running the setup script the remote component can be served by running `serve -C ./my-component/dist`.

Once the remote component is being served the app can be started by navigating to the `my-app` directory in another terminal and running `yarn start`. This will open the app in your browser and render it once it has finished building.

You will observe here that the remote component never sees anything but the initial value of the context.
