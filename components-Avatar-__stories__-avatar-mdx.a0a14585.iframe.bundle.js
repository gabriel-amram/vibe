"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[1732,5304],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Avatar/__stories__/avatar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarWithLeftBadge:()=>AvatarWithLeftBadge,AvatarWithRightBadge:()=>AvatarWithRightBadge,AvatarWithText:()=>AvatarWithText,AvatarWithTooltip:()=>AvatarWithTooltip,ClickableAvatar:()=>ClickableAvatar,Disable:()=>Disable,MultipleAvatars:()=>MultipleAvatars,Overview:()=>Overview,Size:()=>Size,SquareAvatar:()=>SquareAvatar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories_avatar_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx"),AvatarGroup=__webpack_require__("./src/components/AvatarGroup/AvatarGroup.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),createComponentTemplate=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),story_description=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/story-description/story-description.js"),Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),Counter=__webpack_require__("./src/components/Counter/Counter.tsx"),person1=__webpack_require__("./src/components/Avatar/__stories__/assets/person1.png");const guest_namespaceObject=__webpack_require__.p+"static/media/guest.d80aabd8.svg",owner_namespaceObject=__webpack_require__.p+"static/media/owner.252088dc.svg",home_namespaceObject=__webpack_require__.p+"static/media/home.89770a47.svg",minus_namespaceObject=__webpack_require__.p+"static/media/minus.829867f7.svg";var person2=__webpack_require__("./src/components/Avatar/__stories__/assets/person2.png"),person3=__webpack_require__("./src/components/Avatar/__stories__/assets/person3.png"),WhatsNew=__webpack_require__("./src/components/Icon/Icons/components/WhatsNew.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),avatar_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Avatar/__stories__/avatar.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(avatar_stories.c,options);avatar_stories.c&&avatar_stories.c.locals&&avatar_stories.c.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var metaSettings=(0,createStoryMetaSettingsDecorator.w)({component:Avatar.c,enumPropNamesArray:["type","size"],iconPropNamesArray:["icon"]}),avatarTemplate=(0,createComponentTemplate.q)(Avatar.c);const Avatar_stories_avatar_stories={title:"Media/Avatar/Avatar",component:Avatar.c,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var Overview={render:avatarTemplate.bind({}),name:"Overview",args:{size:Avatar.c.sizes.LARGE,src:window.location.origin+"/"+person1,type:Avatar.c.types.IMG,ariaLabel:"Hadas Fahri"}},Size={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.SMALL,src:person1,type:Avatar.c.types.IMG,ariaLabel:"Hadas Fahri"}),(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.MEDIUM,src:person1,type:Avatar.c.types.IMG,ariaLabel:"Hadas Fahri"}),(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,src:person1,type:Avatar.c.types.IMG,ariaLabel:"Hadas Fahri"})]})},name:"Size"},Disable={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.SMALL,src:person1,type:Avatar.c.types.IMG,disabled:!0}),(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.MEDIUM,src:person1,type:Avatar.c.types.IMG,disabled:!0}),(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,src:person1,type:Avatar.c.types.IMG,disabled:!0})]})},name:"Disable"},AvatarWithText={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.SMALL,type:Avatar.c.types.TEXT,text:"RM",backgroundColor:Avatar.c.colors.LIPSTICK,ariaLabel:"Ron Meir"}),(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.MEDIUM,type:Avatar.c.types.TEXT,text:"RM",backgroundColor:Avatar.c.colors.LIPSTICK,ariaLabel:"Ron Meir"}),(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,type:Avatar.c.types.TEXT,text:"RM",backgroundColor:Avatar.c.colors.DONE_GREEN,ariaLabel:"Ron Meir"})]})},name:"Avatar with text"},SquareAvatar={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.SMALL,type:Avatar.c.types.TEXT,text:"R",backgroundColor:Avatar.c.colors.BRIGHT_BLUE,square:!0,ariaLabel:"Ron"}),(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.MEDIUM,type:Avatar.c.types.ICON,icon:WhatsNew.c,backgroundColor:Avatar.c.colors.AQUAMARINE,square:!0,ariaLabel:"Present"}),(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,type:Avatar.c.types.TEXT,text:"RM",backgroundColor:Avatar.c.colors.WORKING_ORANGE,square:!0,ariaLabel:"Ron Meir"})]})},name:"Square avatar"},AvatarWithRightBadge={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,type:Avatar.c.types.IMG,src:person1,bottomRightBadgeProps:{src:guest_namespaceObject},ariaLabel:"Hadas Fahri"}),(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,type:Avatar.c.types.IMG,src:person1,bottomRightBadgeProps:{src:owner_namespaceObject},ariaLabel:"Hadas Fahri"})]})},name:"Avatar with right badge"},AvatarWithLeftBadge={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[" ",(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,type:Avatar.c.types.IMG,src:person1,bottomLeftBadgeProps:{src:home_namespaceObject},ariaLabel:"Hadas Fahri"}),(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,type:Avatar.c.types.IMG,src:person1,bottomLeftBadgeProps:{src:minus_namespaceObject},ariaLabel:"Hadas Fahri"})]})},name:"Avatar with left badge"},AvatarWithTooltip={render:function render(){return(0,jsx_runtime.jsxs)(Flex.c,{direction:Flex.c.directions.ROW,gap:Flex.c.gaps.LARGE,align:Flex.c.align.START,children:[(0,jsx_runtime.jsx)(story_description.c,{description:"Aria label tooltip",vertical:!0,align:Flex.c.align.START,children:(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,type:Avatar.c.types.IMG,src:person1,ariaLabel:"Hadas Fahri"})}),(0,jsx_runtime.jsx)(story_description.c,{description:"Text tooltip",vertical:!0,align:Flex.c.align.START,children:(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,type:Avatar.c.types.IMG,src:person1,tooltipProps:{content:"Hadas Farhi"},ariaLabel:"Hadas Fahri"})}),(0,jsx_runtime.jsx)(story_description.c,{description:"JSX tooltip",vertical:!0,align:Flex.c.align.START,children:(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,type:Avatar.c.types.IMG,src:person1,tooltipProps:{content:(0,jsx_runtime.jsx)("b",{children:"Hadas Farhi"}),position:Tooltip.c.positions.BOTTOM},ariaLabel:"Hadas Fahri"})})]})},name:"Avatar with tooltip"},ClickableAvatar={render:function render(){var _useState2=_slicedToArray((0,react.useState)(0),2),count=_useState2[0],setCount=_useState2[1],incrementCount=(0,react.useCallback)((function(){setCount((function(prevState){return prevState+1}))}),[]);return(0,jsx_runtime.jsxs)(Flex.c,{direction:Flex.c.directions.COLUMN,gap:Flex.c.gaps.MEDIUM,children:[(0,jsx_runtime.jsx)(Avatar.c,{size:Avatar.c.sizes.LARGE,type:Avatar.c.types.IMG,src:person1,ariaLabel:"Hadas Fahri",onClick:incrementCount}),(0,jsx_runtime.jsx)(Counter.c,{count})]})},name:"Clickable avatar"},MultipleAvatars={render:function render(){return(0,jsx_runtime.jsxs)(AvatarGroup.c,{max:2,size:Avatar.c.sizes.LARGE,children:[(0,jsx_runtime.jsx)(Avatar.c,{type:Avatar.c.types.IMG,src:person1,ariaLabel:"Hadas Fahri"}),(0,jsx_runtime.jsx)(Avatar.c,{type:Avatar.c.types.IMG,src:person2,ariaLabel:"Sergey Roytman"}),(0,jsx_runtime.jsx)(Avatar.c,{type:Avatar.c.types.IMG,src:person3,ariaLabel:"Yossi Saadi"})]})},name:"Multiple avatars"};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: avatarTemplate.bind({}),\n  name: "Overview",\n  args: {\n    size: Avatar.sizes.LARGE,\n    src: window.location.origin + "/" + person1,\n    type: Avatar.types.IMG,\n    ariaLabel: "Hadas Fahri"\n  }\n}',...Overview.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Avatar size={Avatar.sizes.SMALL} src={person1} type={Avatar.types.IMG} ariaLabel="Hadas Fahri" />\n      <Avatar size={Avatar.sizes.MEDIUM} src={person1} type={Avatar.types.IMG} ariaLabel="Hadas Fahri" />\n      <Avatar size={Avatar.sizes.LARGE} src={person1} type={Avatar.types.IMG} ariaLabel="Hadas Fahri" />\n    </>,\n  name: "Size"\n}',...Size.parameters?.docs?.source}}},Disable.parameters={...Disable.parameters,docs:{...Disable.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Avatar size={Avatar.sizes.SMALL} src={person1} type={Avatar.types.IMG} disabled />\n      <Avatar size={Avatar.sizes.MEDIUM} src={person1} type={Avatar.types.IMG} disabled />\n      <Avatar size={Avatar.sizes.LARGE} src={person1} type={Avatar.types.IMG} disabled />\n    </>,\n  name: "Disable"\n}',...Disable.parameters?.docs?.source}}},AvatarWithText.parameters={...AvatarWithText.parameters,docs:{...AvatarWithText.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Avatar size={Avatar.sizes.SMALL} type={Avatar.types.TEXT} text="RM" backgroundColor={Avatar.colors.LIPSTICK} ariaLabel="Ron Meir" />\n      <Avatar size={Avatar.sizes.MEDIUM} type={Avatar.types.TEXT} text="RM" backgroundColor={Avatar.colors.LIPSTICK} ariaLabel="Ron Meir" />\n      <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.TEXT} text="RM" backgroundColor={Avatar.colors.DONE_GREEN} ariaLabel="Ron Meir" />\n    </>,\n  name: "Avatar with text"\n}',...AvatarWithText.parameters?.docs?.source}}},SquareAvatar.parameters={...SquareAvatar.parameters,docs:{...SquareAvatar.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Avatar size={Avatar.sizes.SMALL} type={Avatar.types.TEXT} text="R" backgroundColor={Avatar.colors.BRIGHT_BLUE} square ariaLabel="Ron" />\n      <Avatar size={Avatar.sizes.MEDIUM} type={Avatar.types.ICON} icon={WhatsNew} backgroundColor={Avatar.colors.AQUAMARINE} square ariaLabel="Present" />\n      <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.TEXT} text="RM" backgroundColor={Avatar.colors.WORKING_ORANGE} square ariaLabel="Ron Meir" />\n    </>,\n  name: "Square avatar"\n}',...SquareAvatar.parameters?.docs?.source}}},AvatarWithRightBadge.parameters={...AvatarWithRightBadge.parameters,docs:{...AvatarWithRightBadge.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.IMG} src={person1} bottomRightBadgeProps={{\n      src: guest\n    }} ariaLabel="Hadas Fahri" />\n      <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.IMG} src={person1} bottomRightBadgeProps={{\n      src: owner\n    }} ariaLabel="Hadas Fahri" />\n    </>,\n  name: "Avatar with right badge"\n}',...AvatarWithRightBadge.parameters?.docs?.source}}},AvatarWithLeftBadge.parameters={...AvatarWithLeftBadge.parameters,docs:{...AvatarWithLeftBadge.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      {" "}\n      <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.IMG} src={person1} bottomLeftBadgeProps={{\n      src: home\n    }} ariaLabel="Hadas Fahri" />\n      <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.IMG} src={person1} bottomLeftBadgeProps={{\n      src: minus\n    }} ariaLabel="Hadas Fahri" />\n    </>,\n  name: "Avatar with left badge"\n}',...AvatarWithLeftBadge.parameters?.docs?.source}}},AvatarWithTooltip.parameters={...AvatarWithTooltip.parameters,docs:{...AvatarWithTooltip.parameters?.docs,source:{originalSource:'{\n  render: () => <Flex direction={Flex.directions.ROW} gap={Flex.gaps.LARGE} align={Flex.align.START}>\n      <StoryDescription description="Aria label tooltip" vertical align={Flex.align.START}>\n        <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.IMG} src={person1} ariaLabel={"Hadas Fahri"} />\n      </StoryDescription>\n      <StoryDescription description="Text tooltip" vertical align={Flex.align.START}>\n        <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.IMG} src={person1} tooltipProps={{\n        content: "Hadas Farhi"\n      }} ariaLabel={"Hadas Fahri"} />\n      </StoryDescription>\n      <StoryDescription description="JSX tooltip" vertical align={Flex.align.START}>\n        <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.IMG} src={person1} tooltipProps={{\n        content: <b>Hadas Farhi</b>,\n        position: Tooltip.positions.BOTTOM\n      }} ariaLabel={"Hadas Fahri"} />\n      </StoryDescription>\n    </Flex>,\n  name: "Avatar with tooltip"\n}',...AvatarWithTooltip.parameters?.docs?.source}}},ClickableAvatar.parameters={...ClickableAvatar.parameters,docs:{...ClickableAvatar.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [count, setCount] = useState(0);\n    const incrementCount = useCallback(() => {\n      setCount(prevState => prevState + 1);\n    }, []);\n    return <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM}>\n        <Avatar size={Avatar.sizes.LARGE} type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" onClick={incrementCount} />\n        <Counter count={count} />\n      </Flex>;\n  },\n  name: "Clickable avatar"\n}',...ClickableAvatar.parameters?.docs?.source}}},MultipleAvatars.parameters={...MultipleAvatars.parameters,docs:{...MultipleAvatars.parameters?.docs,source:{originalSource:'{\n  render: () => <AvatarGroup max={2} size={Avatar.sizes.LARGE}>\n      <Avatar type={Avatar.types.IMG} src={person1} ariaLabel="Hadas Fahri" />\n      <Avatar type={Avatar.types.IMG} src={person2} ariaLabel="Sergey Roytman" />\n      <Avatar type={Avatar.types.IMG} src={person3} ariaLabel="Yossi Saadi" />\n    </AvatarGroup>,\n  name: "Multiple avatars"\n}',...MultipleAvatars.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Size","Disable","AvatarWithText","SquareAvatar","AvatarWithRightBadge","AvatarWithLeftBadge","AvatarWithTooltip","ClickableAvatar","MultipleAvatars"]},"./src/storybook/functions/createStoryMetaSettingsDecorator.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__,w:()=>createStoryMetaSettingsDecorator});var monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/monday-ui-style/src/Icons/iconsMetaData.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createStoryMetaSettings/createStoryMetaSettings.js"),_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icons/index.ts");function createStoryMetaSettingsDecorator(_ref){var component=_ref.component,enumPropNamesArray=_ref.enumPropNamesArray,iconPropNamesArray=_ref.iconPropNamesArray,actionPropsArray=_ref.actionPropsArray,ignoreControlsPropNamesArray=_ref.ignoreControlsPropNamesArray;return(0,vibe_storybook_components__WEBPACK_IMPORTED_MODULE_1__.u)({component,enumPropNamesArray,iconPropNamesArray,actionPropsArray,ignoreControlsPropNamesArray,iconsMetaData:monday_ui_style_src_Icons_iconsMetaData__WEBPACK_IMPORTED_MODULE_0__.o,allIconsComponents:_components_Icon_Icons__WEBPACK_IMPORTED_MODULE_2__})}const __WEBPACK_DEFAULT_EXPORT__=createStoryMetaSettingsDecorator},"./src/components/Avatar/__stories__/avatar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{avatarTemplate:()=>avatarTemplate,default:()=>avatar});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),component_description_map=__webpack_require__("./src/storybook/components/related-components/component-description-map.tsx"),createComponentTemplate=__webpack_require__("../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js"),component_rules=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/component-rules/component-rules.js"),person1=__webpack_require__("./src/components/Avatar/__stories__/assets/person1.png"),person2=__webpack_require__("./src/components/Avatar/__stories__/assets/person2.png"),person3=__webpack_require__("./src/components/Avatar/__stories__/assets/person3.png");const maleIcon_namespaceObject=__webpack_require__.p+"static/media/maleIcon.38f58647.png",femaleIcon_namespaceObject=__webpack_require__.p+"static/media/femaleIcon.b96a0bea.png";var tip=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/tip/tip.js"),storybook_link=__webpack_require__("../../node_modules/vibe-storybook-components/dist/components/storybook-link/storybook-link.js"),TipMultipleAvatarsTogether=function TipMultipleAvatarsTogether(){return(0,jsx_runtime.jsxs)(tip.c,{title:"Mutiple avatars togethers?",children:["If you want to stack multiple avatars together, check out"," ",(0,jsx_runtime.jsx)(storybook_link.c,{page:"Media/Avatar/AvatarGroup",size:storybook_link.c.sizes.SMALL,children:"AvatarGroup"})," ","component"]})};TipMultipleAvatarsTogether.displayName="TipMultipleAvatarsTogether",TipMultipleAvatarsTogether.__docgenInfo={description:"",methods:[],displayName:"TipMultipleAvatarsTogether"};var avatar_stories=__webpack_require__("./src/components/Avatar/__stories__/avatar.stories.js");const avatarTemplate=(0,createComponentTemplate.q)(Avatar.c);function _createMdxContent(props){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",h3:"h3",div:"div"},(0,lib.MN)(),props.components),{PropsTable,UsageGuidelines,StorybookLink,RelatedComponents}=_components;return PropsTable||_missingMdxReference("PropsTable",!0),RelatedComponents||_missingMdxReference("RelatedComponents",!0),StorybookLink||_missingMdxReference("StorybookLink",!0),UsageGuidelines||_missingMdxReference("UsageGuidelines",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{of:avatar_stories}),"\n","\n",(0,jsx_runtime.jsx)(_components.h1,{id:"avatar",children:"Avatar"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage",children:"Usage"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:"Variants"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#dos-and-donts",children:"Do’s and don’ts"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#use-cases-and-examples",children:"Use cases and examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#related-components",children:"Related components"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Avatar is a graphical representation of a person through a profile picture, image, icon, or set of initials."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:avatar_stories.Overview})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(PropsTable,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(UsageGuidelines,{guidelines:["Use an avatar to help a user in the platform efficiently identify another person or a team.","When there is no personal photo to show, use initials.","If an image fails to load, fall back to the default user avatar.","An avatar may contain a status icon to indicate a user’s status (working from home, busy, etc.).","Use a tooltip or dialog when hovering over the avatar to offer more information. For example: with a person’s name."]}),"\n",(0,jsx_runtime.jsx)(TipMultipleAvatarsTogether,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Avatars appear in 3 sizes: Small, Medium, and Large."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:avatar_stories.Size})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use when a user is inactive in the system."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:avatar_stories.Disable})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"avatar-with-text",children:"Avatar with text"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use when a user’s image is not available, use their initials."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:avatar_stories.AvatarWithText})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"square-avatar-with-icon-or-text",children:"Square avatar with icon or text"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use for non-person avatars, such as a workspace or team."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:avatar_stories.SquareAvatar})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dos-and-donts",children:"Do’s and Don’ts"}),"\n",(0,jsx_runtime.jsx)(component_rules.c,{rules:[{positive:{component:(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-avatar_multiple",children:[(0,jsx_runtime.jsx)(Avatar.c,{className:"multiple-avatar",size:Avatar.c.sizes.LARGE,src:person1,type:Avatar.c.types.IMG}),(0,jsx_runtime.jsx)(Avatar.c,{className:"multiple-avatar",size:Avatar.c.sizes.LARGE,src:person2,type:Avatar.c.types.IMG}),(0,jsx_runtime.jsx)(Avatar.c,{className:"multiple-avatar",size:Avatar.c.sizes.LARGE,src:person3,type:Avatar.c.types.IMG})]}),description:"Use consistent avatar sizes for common use cases to convey their purpose."},negative:{component:(0,jsx_runtime.jsxs)(_components.div,{className:"monday-storybook-avatar_multiple-reverse",children:[(0,jsx_runtime.jsx)(Avatar.c,{className:"multiple-reverse-avatar",size:Avatar.c.sizes.SMALL,src:person1,type:Avatar.c.types.IMG}),(0,jsx_runtime.jsx)(Avatar.c,{className:"multiple-reverse-avatar",size:Avatar.c.sizes.MEDIUM,src:person2,type:Avatar.c.types.IMG}),(0,jsx_runtime.jsx)(Avatar.c,{className:"multiple-reverse-avatar",size:Avatar.c.sizes.LARGE,src:person3,type:Avatar.c.types.IMG})]}),description:"Avoid using a mix of avatar sizes that display together and create design imbalance."}},{positive:{component:(0,jsx_runtime.jsx)(Avatar.c,{src:maleIcon_namespaceObject,type:Avatar.c.types.IMG}),description:"Use branded generic avatars when a user has not set their avatar image."},negative:{component:(0,jsx_runtime.jsx)(Avatar.c,{src:femaleIcon_namespaceObject,type:Avatar.c.types.IMG}),description:"Don’t make assumptions and use gendered placeholder avatars."}}]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"use-cases-and-examples",children:"Use cases and examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"avatar-with-right-badge",children:"Avatar with right badge"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use to indicate the user’s permissions such as: Guest, owner."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:avatar_stories.AvatarWithRightBadge})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"avatar-with-left-badge",children:"Avatar with left badge"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use to indicate the status of a user such as: Working from home, out of office etc."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:avatar_stories.AvatarWithLeftBadge})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"avatar-with-tooltip",children:"Avatar with tooltip"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use to display tooltip on onHover Avatar event."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:avatar_stories.AvatarWithTooltip})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"clickable-avatar",children:"Clickable avatar"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use to fire actions on avatar click event."}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:avatar_stories.ClickableAvatar})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"multiple-avatars",children:"Multiple avatars"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To group multiple Avatars together, use the ",(0,jsx_runtime.jsx)(StorybookLink,{page:"Media/Avatar/AvatarGroup",children:"AvatarGroup"})," component."]}),"\n",(0,jsx_runtime.jsx)(dist.gF,{children:(0,jsx_runtime.jsx)(dist._W,{of:avatar_stories.MultipleAvatars})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"related-components",children:"Related components"}),"\n",(0,jsx_runtime.jsx)(RelatedComponents,{componentsNames:[component_description_map.I1,component_description_map.w3,component_description_map.KQ]})]})}const avatar=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Avatar/__stories__/avatar.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-avatar_multiple{display:flex;align-items:center;justify-content:center;padding:10px 20px 10px 20px}.monday-storybook-avatar_multiple .multiple-avatar{margin:-8px}.monday-storybook-avatar_multiple-reverse{display:flex;align-items:flex-start}.monday-storybook-avatar_multiple-reverse .multiple-reverse-avatar{margin:-5px}.monday-storybook-avatar_multiple-reverse .multiple-reverse-avatar:first-child{z-index:2}.monday-storybook-avatar_multiple-reverse .multiple-reverse-avatar:nth-child(2){z-index:1}.text-formatted--large{font-size:26px;font-weight:normal}.text-formatted--medium{font-size:18px;font-weight:100}.text-formatted--small{font-size:10px;font-weight:bold}","",{version:3,sources:["webpack://./src/components/Avatar/__stories__/avatar.stories.scss"],names:[],mappings:"AACE,kCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,2BAAA,CACA,mDACE,WAAA,CAIJ,0CACE,YAAA,CACA,sBAAA,CAEA,mEACE,WAAA,CACA,+EACE,SAAA,CAEF,gFACE,SAAA,CAMR,uBACE,cAAA,CACA,kBAAA,CAGF,wBACE,cAAA,CACA,eAAA,CAGF,uBACE,cAAA,CACA,gBAAA",sourcesContent:[".monday-storybook-avatar {\n  &_multiple {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px 20px 10px 20px;\n    .multiple-avatar {\n      margin: -8px;\n    }\n  }\n\n  &_multiple-reverse {\n    display: flex;\n    align-items: flex-start;\n\n    .multiple-reverse-avatar {\n      margin: -5px;\n      &:first-child {\n        z-index: 2;\n      }\n      &:nth-child(2) {\n        z-index: 1;\n      }\n    }\n  }\n}\n\n.text-formatted--large {\n  font-size: 26px;\n  font-weight: normal;\n}\n\n.text-formatted--medium {\n  font-size: 18px;\n  font-weight: 100;\n}\n\n.text-formatted--small {\n  font-size: 10px;\n  font-weight: bold;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/vibe-storybook-components/dist/components/story-description/story-description.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>p});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),withStaticProps=__webpack_require__("../../node_modules/vibe-storybook-components/dist/types/withStaticProps.js"),FlexConstants=__webpack_require__("../../node_modules/vibe-storybook-components/dist/helpers/components/Flex/FlexConstants.js"),Flex=__webpack_require__("../../node_modules/vibe-storybook-components/dist/helpers/components/Flex/Flex.js"),e_description="story-description-module_description__yFjQO",e_vertical="story-description-module_vertical__C1SJj";const m=t=>{var o,l,n,{description:a="",headerStyle:p,children:u,vertical:v=!1,className:f,align:j,justify:g=(null===(o=m.justify)||void 0===o?void 0:o.START),headerAlign:h,headerJustify:y}=t;const x=(0,react.useMemo)((()=>{var i,s;return v?null===(i=m.directions)||void 0===i?void 0:i.COLUMN:null===(s=m.directions)||void 0===s?void 0:s.ROW}),[v]);return(0,jsx_runtime.jsxs)(Flex.c,{direction:x,gap:null===(l=m.gaps)||void 0===l?void 0:l.MEDIUM,justify:g,align:j||void 0,className:f,children:[(0,jsx_runtime.jsx)(Flex.c,{className:classnames_default()(e_description,{[e_vertical]:v}),style:Object.assign({width:"120px"},p),justify:y,align:h||(null===(n=m.align)||void 0===n?void 0:n.CENTER),children:a}),u]})};var p=(0,withStaticProps.m)(m,{justify:FlexConstants.or,align:FlexConstants.Aj,gaps:FlexConstants.iW,directions:FlexConstants.Ko})},"../../node_modules/vibe-storybook-components/dist/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return e=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}}]);