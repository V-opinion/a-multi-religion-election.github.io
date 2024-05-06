"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94745],{754584:function(e,s,t){t.d(s,{g:function(){return r}});let r="6.4rem"},471296:function(e,s,t){t.d(s,{O:function(){return ContentContainer}});var r=t(552322),o=t(228292),a=t.n(o),l=t(202784),i=t(72779),n=t.n(i),c=t(202205);let ContentContainer=class ContentContainer extends l.PureComponent{static #e=this.defaultProps={isFullWidth:!1,spacing:c.default.spacing.xxs};render(){return(0,r.jsxs)("div",{id:this.props.id,className:a().dynamic([["df2d19d1daa620bb",[this.getPadding(this.props.spacingSm),this.props.isFullWidth?"none":this.props.maxWidth||c.default.responsiveBreakpoints.extraLarge,c.default.responsiveBreakpoints.medium,this.getPadding(this.props.spacingMd),c.default.responsiveBreakpoints.large,this.getPadding(this.props.spacingLg),c.default.responsiveBreakpoints.extraLarge,this.getPadding(this.props.spacingXL)]]])+" "+(n()("content-container",this.props.className,{"full-width":this.props.isFullWidth})||""),children:[this.props.children,(0,r.jsx)(a(),{id:"df2d19d1daa620bb",dynamic:[this.getPadding(this.props.spacingSm),this.props.isFullWidth?"none":this.props.maxWidth||c.default.responsiveBreakpoints.extraLarge,c.default.responsiveBreakpoints.medium,this.getPadding(this.props.spacingMd),c.default.responsiveBreakpoints.large,this.getPadding(this.props.spacingLg),c.default.responsiveBreakpoints.extraLarge,this.getPadding(this.props.spacingXL)],children:`.content-container.__jsx-style-dynamic-selector{padding:${this.getPadding(this.props.spacingSm)};max-width:${this.props.isFullWidth?"none":this.props.maxWidth||c.default.responsiveBreakpoints.extraLarge};margin:0 auto;width:100%}@media(min-width:${c.default.responsiveBreakpoints.medium}){.content-container.__jsx-style-dynamic-selector{padding:${this.getPadding(this.props.spacingMd)}}}@media(min-width:${c.default.responsiveBreakpoints.large}){.content-container.__jsx-style-dynamic-selector{padding:${this.getPadding(this.props.spacingLg)}}}@media(min-width:${c.default.responsiveBreakpoints.extraLarge}){.content-container.__jsx-style-dynamic-selector{padding:${this.getPadding(this.props.spacingXL)}}}body.print .content-container.__jsx-style-dynamic-selector{padding:0}`})]})}constructor(...e){super(...e),this.getPadding=e=>this.props.isFullWidth&&!e?"0":e?`0 ${e}`:`0 ${this.props.spacing}`}};s.Z=ContentContainer},890005:function(e,s,t){var r=t(552322),o=t(228292),a=t.n(o),l=t(202784),i=t(158616),n=t(144237),c=t(202205);let d=(0,l.memo)(e=>{let{children:s,id:t}=e,{theme:o}=(0,i.Fj)();return(0,r.jsxs)("div",{id:t,className:a().dynamic([["329bc79e57d30061",[c.default.spacing.xxxxs,n.ZP.typography.caption(),o.colors.labelDangerous]]])+" error-message",children:[s,(0,r.jsx)(a(),{id:"329bc79e57d30061",dynamic:[c.default.spacing.xxxxs,n.ZP.typography.caption(),o.colors.labelDangerous],children:`.error-message.__jsx-style-dynamic-selector{width:100%;display:grid;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;grid-template-columns:-webkit-max-content 1fr;grid-template-columns:max-content 1fr;margin-top:${c.default.spacing.xxxxs};${n.ZP.typography.caption()}
          color: ${o.colors.labelDangerous};}`})]})});s.Z=d},987053:function(e,s,t){var r=t(552322),o=t(228292),a=t.n(o);t(202784);var l=t(72779),i=t.n(l),n=t(183554),c=t(334245),d=t(106098),y=t(769987),u=t(890005);let p=(0,d.gs)("input");s.Z=e=>{let{inputRef:s,isError:t,errorMessage:o,className:l,shouldEnforceLTR:d,testId:b,...m}=e,x=(0,n.Z)("error"),g=(0,c.Z)(),_=g.component.textEditable({selector:"input"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{ref:s,dir:d?"ltr":void 0,"data-testid":e.testId,"aria-invalid":t,"aria-describedby":t?x:void 0,...m,className:a().dynamic([["5557ab525bbbb690",[y._.userIsNotTabbing]]])+" "+(m&&null!=m.className&&m.className||i()(l,_.className,p.className)||"")}),t&&o&&(0,r.jsx)(u.Z,{id:x,children:o}),_.styles,p.styles,(0,r.jsx)(a(),{id:"5557ab525bbbb690",dynamic:[y._.userIsNotTabbing],children:`input.__jsx-style-dynamic-selector{display:inline-block}input.__jsx-style-dynamic-selector::-webkit-outer-spin-button,input.__jsx-style-dynamic-selector::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type="number"].__jsx-style-dynamic-selector{-moz-appearance:textfield}${y._.userIsNotTabbing} input.__jsx-style-dynamic-selector:focus{outline:none}`})]})}},183554:function(e,s,t){var r=t(202784),o=t(789128);s.Z=e=>{let s=(0,r.useMemo)(()=>(0,o.z)(e),[e]);return s}},334245:function(e,s,t){t.d(s,{l:function(){return injectWebsiteDesignRulesets}});var r=t(552322),o=t(228292),a=t.n(o),l=t(202784),i=t(158616),n=t(144237),c=t(202205);let useWebsiteDesignRulesets=()=>{let{theme:e,productVariables:s}=(0,i.Fj)(),t=(0,l.useMemo)(()=>({component:{textEditable:t=>{let{selector:o,borderType:l,shouldNormalizePlaceholderOpacity:i}={borderType:"border",...t},d="border"===l?"border: var(--border-thickness) solid var(--border-color);":`
                box-shadow: inset 0 0 0 var(--border-thickness) var(--border-color);
                -webkit-appearance: none; /* trick to make box-shadow work on iOS browsers - https://stackoverflow.com/a/10757425. NOTE: '-webkit-appearance: textarea' doesn't work */
                border: none; /* needed to override the browser border for the text area, which also adds unwanted scrollbar */
                `;return{styles:(0,r.jsx)(a(),{id:"a78423e78970215b",dynamic:[o,e.colors.outlineSubduedDefault,c.default.spacing.xxxs,c.default.spacing.xxs,e.colors.backgroundPrimary,e.colors.labelPrimary,s.borderRadius.regular,d,n.ZP.typography.form.input(),o,e.colors.outlineSubduedHover,o,o,e.colors.outlineActive,o,o,o,o,e.colors.labelDisabled,o,o,o,e.colors.outlineSubduedDefault,e.colors.surfaceDisabled,o,o,o,o,e.colors.outlineError,o,e.colors.labelSecondary,i?"opacity: 1;":""],children:`${o}.__jsx-style-dynamic-selector{--border-thickness:1px;--border-color:${e.colors.outlineSubduedDefault};width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:${c.default.spacing.xxxs} ${c.default.spacing.xxs};background-color:${e.colors.backgroundPrimary};color:${e.colors.labelPrimary};-webkit-border-radius:${s.borderRadius.regular};-moz-border-radius:${s.borderRadius.regular};border-radius:${s.borderRadius.regular};${d}
              ${n.ZP.typography.form.input()}
            }${o}.__jsx-style-dynamic-selector:hover{--border-color:${e.colors.outlineSubduedHover}}${o}.__jsx-style-dynamic-selector:focus,${o}.__jsx-style-dynamic-selector:active{--border-color:${e.colors.outlineActive}}${o}.__jsx-style-dynamic-selector:disabled,${o}.__jsx-style-dynamic-selector:disabled::-webkit-input-placeholder,${o}[aria-disabled="true"].__jsx-style-dynamic-selector,${o}[readonly].__jsx-style-dynamic-selector{color:${e.colors.labelDisabled}}${o}.__jsx-style-dynamic-selector:disabled,${o}.__jsx-style-dynamic-selector:disabled:-moz-placeholder,${o}[aria-disabled="true"].__jsx-style-dynamic-selector,${o}[readonly].__jsx-style-dynamic-selector{color:${e.colors.labelDisabled}}${o}.__jsx-style-dynamic-selector:disabled,${o}.__jsx-style-dynamic-selector:disabled::-moz-placeholder,${o}[aria-disabled="true"].__jsx-style-dynamic-selector,${o}[readonly].__jsx-style-dynamic-selector{color:${e.colors.labelDisabled}}${o}.__jsx-style-dynamic-selector:disabled,${o}.__jsx-style-dynamic-selector:disabled:-ms-input-placeholder,${o}[aria-disabled="true"].__jsx-style-dynamic-selector,${o}[readonly].__jsx-style-dynamic-selector{color:${e.colors.labelDisabled}}${o}.__jsx-style-dynamic-selector:disabled,${o}.__jsx-style-dynamic-selector:disabled::-ms-input-placeholder,${o}[aria-disabled="true"].__jsx-style-dynamic-selector,${o}[readonly].__jsx-style-dynamic-selector{color:${e.colors.labelDisabled}}${o}.__jsx-style-dynamic-selector:disabled,${o}.__jsx-style-dynamic-selector:disabled::placeholder,${o}[aria-disabled="true"].__jsx-style-dynamic-selector,${o}[readonly].__jsx-style-dynamic-selector{color:${e.colors.labelDisabled}}${o}.__jsx-style-dynamic-selector:disabled,${o}[aria-disabled="true"].__jsx-style-dynamic-selector,${o}[readonly].__jsx-style-dynamic-selector{--border-color:${e.colors.outlineSubduedDefault};background-color:${e.colors.surfaceDisabled}}${o}.__jsx-style-dynamic-selector:disabled,${o}[aria-disabled="true"].__jsx-style-dynamic-selector{cursor:not-allowed}${o}.__jsx-style-dynamic-selector:invalid,${o}[aria-invalid="true"].__jsx-style-dynamic-selector{--border-color:${e.colors.outlineError}}${o}.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:${e.colors.labelSecondary};${i?"opacity: 1;":""}
            }${o}.__jsx-style-dynamic-selector:-moz-placeholder{color:${e.colors.labelSecondary};${i?"opacity: 1;":""}
            }${o}.__jsx-style-dynamic-selector::-moz-placeholder{color:${e.colors.labelSecondary};${i?"opacity: 1;":""}
            }${o}.__jsx-style-dynamic-selector:-ms-input-placeholder{color:${e.colors.labelSecondary};${i?"opacity: 1;":""}
            }${o}.__jsx-style-dynamic-selector::-ms-input-placeholder{color:${e.colors.labelSecondary};${i?"opacity: 1;":""}
            }${o}.__jsx-style-dynamic-selector::placeholder{color:${e.colors.labelSecondary};${i?"opacity: 1;":""}
            }`}),className:a().dynamic([["a78423e78970215b",[o,e.colors.outlineSubduedDefault,c.default.spacing.xxxs,c.default.spacing.xxs,e.colors.backgroundPrimary,e.colors.labelPrimary,s.borderRadius.regular,d,n.ZP.typography.form.input(),o,e.colors.outlineSubduedHover,o,o,e.colors.outlineActive,o,o,o,o,e.colors.labelDisabled,o,o,o,e.colors.outlineSubduedDefault,e.colors.surfaceDisabled,o,o,o,o,e.colors.outlineError,o,e.colors.labelSecondary,i?"opacity: 1;":""]]])}}}}),[e,s]);return t},injectWebsiteDesignRulesets=e=>s=>{let t=useWebsiteDesignRulesets();return(0,r.jsx)(e,{...s,websiteDesignRulesets:t})};s.Z=useWebsiteDesignRulesets},106098:function(e,s,t){t.d(s,{g0:function(){return strongAndEmStyles},gs:function(){return getNormalizedInvalidPseudoSelectorStyles},pH:function(){return characterBasedLanguageStyles},zy:function(){return flipForRTL}});var r=t(552322),o=t(228292),a=t.n(o),l=t(769987);let characterBasedLanguageStyles=e=>({styles:(0,r.jsx)(a(),{id:"7544c1be36a08688",dynamic:[e.cssSelector,e.cssSelector,e.cssSelector,e.fontWeight],children:`html[lang|="zh"] ${e.cssSelector}.__jsx-style-dynamic-selector,html[lang="ja"] ${e.cssSelector}.__jsx-style-dynamic-selector,html[lang="ko"] ${e.cssSelector}.__jsx-style-dynamic-selector{font-weight:${e.fontWeight}}`}),className:a().dynamic([["7544c1be36a08688",[e.cssSelector,e.cssSelector,e.cssSelector,e.fontWeight]]])}),flipForRTL=e=>{let{cssSelector:s,additionalTransformStyles:t}=e;return{styles:(0,r.jsx)(a(),{id:"4c7c4369d263642e",dynamic:[l.K.RTL,s,t||""],children:`${l.K.RTL} ${s}.__jsx-style-dynamic-selector{-webkit-transform:scalex(-1)${t||""};-moz-transform:scalex(-1)${t||""};-ms-transform:scalex(-1)${t||""};-o-transform:scalex(-1)${t||""};transform:scalex(-1)${t||""}}`}),className:a().dynamic([["4c7c4369d263642e",[l.K.RTL,s,t||""]]])}},strongAndEmStyles=e=>{let{selector:s,typographyConfig:t}=e;return{boldStyles:{styles:(0,r.jsx)(a(),{id:"88c2cad7350f411d",dynamic:[s,t.weight.bold],children:`${s}.__jsx-style-dynamic-selector strong{font-weight:${t.weight.bold}}`}),className:a().dynamic([["88c2cad7350f411d",[s,t.weight.bold]]])},italicStyles:{styles:(0,r.jsx)(a(),{id:"769837f1fc7eefc0",dynamic:[s,t.supportsItalic?"italic":"normal"],children:`${s}.__jsx-style-dynamic-selector em{font-style:${t.supportsItalic?"italic":"normal"}}`}),className:a().dynamic([["769837f1fc7eefc0",[s,t.supportsItalic?"italic":"normal"]]])}}},getNormalizedInvalidPseudoSelectorStyles=e=>({styles:(0,r.jsx)(a(),{id:"8b833a138dbf51a6",dynamic:[e],children:`${e}.__jsx-style-dynamic-selector:invalid{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}`}),className:a().dynamic([["8b833a138dbf51a6",[e]]])})}}]);