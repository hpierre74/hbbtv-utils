import { getKeyset, getKeymap } from "./utils";

class OipfApp {
  init({ broadcastPlayer, oipfApplicationManager }) {
    if (!broadcastPlayer || !oipfApplicationManager) {
      throw new Error(
        "You must provide broadcastPlayer and oipfApplicationManager DOM IDs"
      );
    }
    this.broadcastPlayer = document.getElementById(broadcastPlayer);
    this.oipfApplicationManager = document.getElementById(
      oipfApplicationManager
    );

    if (
      this.oipfApplicationManager &&
      this.oipfApplicationManager.getOwnerApplication
    ) {
      this.application = this.oipfApplicationManager.getOwnerApplication(
        document
      );

      const { keyset } = this.application.privateData;
      this.keyset = keyset;
      this.keyMap = getKeymap(keyset);

      if (this.application.active) {
        this.application.active();
      }

      if (this.application.activateInput) {
        this.application.activateInput();
      }
    }
  }

  isHbbtv() {
    return Boolean(
      this.oipfApplicationManager &&
        this.oipfApplicationManager.getOwnerApplication
    );
  }

  startBroadcast() {
    if (this.isHbbtv()) {
      this.broadcastPlayer.bindToCurrentChannel();
    }
  }

  stopBroadcast() {
    if (this.isHbbtv()) {
      this.broadcastPlayer.bindToCurrentChannel();
      this.broadcastPlayer.stop();
    }
  }

  updateKeyset = keysList => {
    if (!this.application || keysList === this.keysList) {
      return;
    }

    this.keysList = keysList;

    const keyset = getKeyset(keysList, this.keyMap);

    if (keyset === this.keyset.value || keyset === 0) {
      return;
    }

    this.keyset.setValue(keyset);
  };

  show() {
    if (this.application) {
      this.application.show();
    }
  }
}

const OipfApplication = OipfApp();

export { OipfApplication };
