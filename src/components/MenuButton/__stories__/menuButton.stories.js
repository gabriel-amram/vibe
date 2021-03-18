import React from "react";
import { select, boolean, number } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import MenuButton from "../MenuButton";
import { ComponentStateDescription, FlexLayout, StoryStateColumn, StoryStateRow } from "../../storybook-helpers";
import DropdownChevronDown from "../../Icon/Icons/components/DropdownChevronDown";
import "./menuButton.style.scss";
import { Menu, MenuItem, MenuTitle } from "../../index";
import { Favorite, Sun, Moon } from "../../Icon/Icons";
import Bolt from "../../Icon/Icons/components/Bolt";
import MoveArrowUp from "../../Icon/Icons/components/MoveArrowUp";
import MoveArrowDown from "../../Icon/Icons/components/MoveArrowDown";
import MoveArrowLeft from "../../Icon/Icons/components/MoveArrowLeft";
import MoveArrowRight from "../../Icon/Icons/components/MoveArrowRight";

const NOOP = () => {};

function MenuButtonContent() {
  return <div className="menu-button-content-story">I can be whatever i want to be!</div>;
}

export const Sandbox = () => (
  <StoryStateRow>
    <StoryStateColumn centerize>
      <MenuButton
        id="Knobs"
        size={select("Size", MenuButton.sizes, MenuButton.sizes.MEDIUM)}
        closeDialogOnContentClick={boolean("Close Dialog On Content Click", false)}
        disabled={boolean("Menu Button Disabled", false)}
        dialogPaddingSize={select("Dialog Padding Size", MenuButton.paddingSizes, MenuButton.paddingSizes.MEDIUM)}
        dialogPosition={select(
          "Dialog Opening Position",
          MenuButton.dialogPositions,
          MenuButton.dialogPositions.BOTTOM_START
        )}
        dialogOffset={{
          main: number("Dialog offset in main axis", 0),
          secondary: number("Dialog offset in secondary axis", 0)
        }}
        ariaLabel="Default menu icon"
      >
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuTitle caption="Look up, you might see" captionPosition={MenuTitle.positions.TOP} />
          <MenuItem icon={Sun} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} onClick={NOOP} iconType={MenuItem.iconType.SVG} title="And the stars" />
        </Menu>
      </MenuButton>
    </StoryStateColumn>
  </StoryStateRow>
);

export const DifferentIcon = () => (
  <div>
    <MenuButton component={DropdownChevronDown} ariaLabel={"chevron menu icon menu button"}>
      <MenuButtonContent />
    </MenuButton>
  </div>
);

export const MenuButtonWithMenu = () => (
  <MenuButton ariaLabel="opens a menu with sub menu">
    <Menu id="menu-in-menu-button" ariaDescribedBy="title-id">
      <MenuTitle caption="My awesome menu" id="title-id" />
      <MenuItem title="First" icon={Moon} />
      <MenuItem title="Second" icon={Sun}>
        <Menu id="sub-menu-directions">
          <MenuItem title="Up" icon={MoveArrowUp} />
          <MenuItem title="Down" icon={MoveArrowDown} />
          <MenuItem title="Left" icon={MoveArrowLeft} />
          <MenuItem title="Right" icon={MoveArrowRight} />
        </Menu>
      </MenuItem>
      <MenuItem title="Third" icon={Bolt} />
    </Menu>
  </MenuButton>
);

export const Sizes = () => (
  <FlexLayout fullWidth spaceBetween className="monday-button-story-ai ">
    <section>
      <MenuButton size={MenuButton.sizes.XXS} ariaLabel={"extra extra small menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"XXS"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.XS} ariaLabel={"extra small menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"XS"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.SMALL} ariaLabel={"small menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"SMALL"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.MEDIUM} ariaLabel={"medium menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"MEDIUM"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.LARGE} ariaLabel={"large menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"LARGE"} />
    </section>
  </FlexLayout>
);

export const Positions = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn centerize title={"Bottom Start"}>
        <MenuButton dialogPosition={MenuButton.dialogPositions.BOTTOM_START} ariaLabel={"Bottom Start"}>
          <MenuButtonContent />
        </MenuButton>
      </StoryStateColumn>
    </StoryStateRow>
    <StoryStateRow>
      <StoryStateColumn centerize title={"Bottom"}>
        <MenuButton dialogPosition={MenuButton.dialogPositions.BOTTOM} ariaLabel={"Bottom"}>
          <MenuButtonContent />
        </MenuButton>
      </StoryStateColumn>
    </StoryStateRow>
    <StoryStateRow>
      <StoryStateColumn centerize title={"Bottom End"}>
        <MenuButton dialogPosition={MenuButton.dialogPositions.BOTTOM_END} ariaLabel={"Bottom End"}>
          <MenuButtonContent />
        </MenuButton>
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export default {
  title: "Components|MenuButton",
  component: MenuButton,
  decorators: [withPerformance]
};
