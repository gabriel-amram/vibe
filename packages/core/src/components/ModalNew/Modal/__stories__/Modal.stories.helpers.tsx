import React, { useEffect } from "react";
import Button from "../../../Button/Button";
import { StorybookLink, Tip } from "vibe-storybook-components";
import { useAfterFirstRender } from "../../../../hooks";

export const OpenedModalPreview = ({
  onOpenModalClick,
  large = false,
  children: modal
}: {
  onOpenModalClick: () => void;
  large?: boolean;
  children: React.ReactNode;
}) => {
  const isAfterFirstRender = useAfterFirstRender();
  return (
    <div
      style={{ paddingInlineStart: 32, paddingBlockStart: 40, height: large ? 540 : 360 }}
      // workaround to prevent modal from autofocusing on page load
      // autofocus would work as expected when modal closes and reopens
      {...(!isAfterFirstRender.current && { "data-no-autofocus": true })}
    >
      <Button onClick={onOpenModalClick}>Open Modal</Button>
      {modal}
    </div>
  );
};

export const useRemoveModalScrollLock = (show: boolean) => {
  useEffect(() => {
    if (show && document.body.attributes.getNamedItem("data-scroll-locked")) {
      document.body.attributes.removeNamedItem("data-scroll-locked");
      document.documentElement.addEventListener(
        "wheel",
        e => {
          e.stopImmediatePropagation();
        },
        true
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- this is intended to run once, on mount
  }, []);
};

export const ModalTip = () => (
  <Tip>
    Since the modal is used for short and non-frequent tasks, consider using the main flow for common tasks. For
    creating a popover positioned next to other components, like customized menus, check out our{" "}
    <StorybookLink page="Popover/Dialog" size={StorybookLink.sizes.SMALL}>
      Dialog
    </StorybookLink>{" "}
    component.
  </Tip>
);
