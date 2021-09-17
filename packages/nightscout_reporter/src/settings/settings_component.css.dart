final List<dynamic> styles = ['body {\n  --primaryBack: #055524;\n  --primaryFore: white;\n  --secondaryBack: #57bb8a;\n  --secondaryFore: black;\n  --debugFirst: #220;\n  --debugSecond: #550;\n  --debugFore: #ffeb3b;\n  --settingsHeaderBack: #006064;\n  --settingsHeaderFore: #b2ebf2;\n  --settingsBodyBack: #4dd0e1;\n  --settingsBodyFore: black;\n  --settingsScrollThumb: #0097a7;\n  --legalHeaderBack: #e65100;\n  --legalHeaderFore: #ffe0b2;\n  --legalBodyBack: #ffb74d;\n  --legalBodyFore: black;\n  --legalScrollThumb: #f57c00;\n  --whatsnewHeaderBack: blue900;\n  --whatsnewHeaderFore: blue100;\n  --whatsnewBodyBack: blue500;\n  --whatsnewBodyFore: black;\n  --whatsnewScrollThumb: blue700;\n  --localFore: purple500;\n  --localBack: purple100;\n  --betaFore: green800;\n  --betaBack: transparent;\n  --pdfBtnBack: red400;\n  --pdfBtnFore: rgba(255, 255, 255, 0.8);\n  --pdfInfoFore: rgba(0, 0, 0, 0.7);\n  --sendMarked: lightBlue800;\n  --googleSignedout: red400;\n  --loopMarked: #a0a0ff;\n  --printparamsHeaderBack: #b71c1c;\n  --printparamsHeaderFore: #ffcdd2;\n  --printparamsBodyBack: #e57373;\n  --printparamsBodyFore: black;\n  --printparamsScrollThumb: #d32f2f;\n  --shortcutHeaderBack: #afb42b;\n  --shortcutHeaderFore: #afb42b;\n  --shortcutBodyBack: #afb42b;\n  --shortcutBodyFore: #afb42b;\n  --shortcutScrollThumb: #ff0000;\n}\n\n.betaBox {\n  box-shadow: 0 0 10px 3px #00ffff;\n}\n\n.betaText {\n  animation: glowing 1s linear infinite alternate;\n}\n\n@keyframes glowing {\n  0% {\n    text-shadow: 0 0 0px;\n  }\n  100% {\n    text-shadow: 0 0 30px;\n  }\n}\n.iconButton material-icon,\n.iconButton img {\n  margin-right: 1em;\n}\n\n.imageButton img {\n  height: 16px;\n  margin-right: 1em;\n}\n\nmaterial-slider {\n  width: 100%;\n  margin-left: 2em;\n  margin-right: 2em;\n}\n\n::ng-deep material-slider.maxsize .knob-real,\n::ng-deep material-slider.maxsize .is-dragging.knob-drag-shadow {\n  background-color: var(--settingsHeaderBack);\n}\n\n::ng-deep material-slider.maxsize .knob:focus .knob-hover-shadow,\n::ng-deep material-slider.maxsize .knob:hover .knob-hover-shadow {\n  background-color: var(--settingsHeaderFore);\n}\n\n::ng-deep material-slider.maxsize .left-track-container > .track {\n  background-color: var(--settingsHeaderBack) !important;\n}\n\n::ng-deep material-slider.maxsize .right-track-container > .track {\n  background-color: var(--settingsHeaderFore) !important;\n}\n\n::ng-deep material-checkbox:not(.disabled) .icon-container .icon.filled {\n  color: var(--settingsHeaderBack);\n}\n\n::ng-deep material-select-item.selected {\n  color: var(--settingsHeaderBack);\n}\n\n::ng-deep .selected-accent.mixin.mixin {\n  background: var(--settingHeaderFore);\n}\n\n.themeSelect ::ng-deep material-list {\n  background: var(--settingsBodyBack);\n  padding: 0;\n}\n.themeSelect ::ng-deep material-list material-select-item {\n  display: flex;\n  flex-direction: column;\n  line-height: initial;\n  align-items: flex-start;\n  padding: 0.2em 0.5em;\n  color: var(--settingsBodyFore);\n}\n.themeSelect ::ng-deep material-list material-select-item div.itemSub {\n  font-size: 75%;\n}\n.themeSelect ::ng-deep material-list material-select-item .selected-accent {\n  background-color: var(--settingsHeaderBack);\n}\n.themeSelect ::ng-deep material-list material-select-item.selected {\n  background-color: var(--settingsHeaderBack);\n  color: var(--settingsHeaderFore);\n}\n\n.datepicker-row {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n}\n\n.datepicker-row label {\n  position: absolute;\n  top: -15px;\n  color: rgba(0, 0, 0, 0.541176);\n  font-size: 12px;\n}\n\n.userinfo {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n}\n.userinfo material-input {\n  flex-shrink: 0;\n  flex-grow: 1;\n}\n\n.controls {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n  min-width: 7em;\n}\n.controls .label {\n  padding-right: 2em;\n}\n.controls material-fab:not([disabled]) {\n  background-color: var(--settingsHeaderBack);\n  color: var(--primaryFore);\n}\n\n.urlPanel {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n}\n.urlPanel material-input {\n  flex-shrink: 0;\n  flex-grow: 1;\n}\n.urlPanel material-button:not([disabled]) .urlIcon {\n  color: var(--settingsHeaderBack);\n}\n\n.functions {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\nmaterial-dialog[main] {\n  min-width: 80%;\n}\nmaterial-dialog[main] ::ng-deep main::-webkit-scrollbar {\n  width: 16px;\n}\nmaterial-dialog[main] ::ng-deep main::-webkit-scrollbar-track {\n  background-color: var(--settingsBodyBack);\n}\nmaterial-dialog[main] ::ng-deep main::-webkit-scrollbar-thumb {\n  background-color: var(--settingsScrollThumb);\n}\nmaterial-dialog[main] ::ng-deep main {\n  scrollbar-color: var(--settingsScrollThumb) var(--settingsBodyBack);\n}\nmaterial-dialog[main] ::ng-deep .wrapper > header {\n  /*! @noflip */\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\nmaterial-dialog[main] ::ng-deep .wrapper > main, material-dialog[main][headered] ::ng-deep .wrapper > main {\n  padding: 0;\n}\n\nmaterial-dialog.headered-dialog ::ng-deep .wrapper > header, material-dialog.headered-dialog[headered] ::ng-deep .wrapper > header {\n  background-color: var(--settingsHeaderBack);\n}\nmaterial-dialog.headered-dialog ::ng-deep .wrapper > footer, material-dialog.headered-dialog[headered] ::ng-deep .wrapper > footer {\n  background-color: var(--settingsHeaderBack);\n  color: var(--settingsHeaderFore);\n  padding: 0;\n}\nmaterial-dialog.headered-dialog[headered] ::ng-deep .wrapper ::ng-deep h1 {\n  background-color: var(--settingsHeaderBack);\n  color: var(--settingsHeaderFore);\n}\n\n.root {\n  padding: 1em;\n  font-size: 1.2em;\n  color: var(--settingsBodyFore);\n  background-color: var(--settingsBodyBack);\n}\n\n.languagePanel {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.subtitle {\n  display: flex;\n  flex-direction: row;\n  color: var(--settingsHeaderBack);\n  font-size: 1.5em;\n  padding-bottom: 0.5em;\n  align-items: center;\n  justify-content: space-between;\n}\n\ndiv[header] {\n  display: flex;\n  flex-direction: row;\n  color: var(--settingsHeaderFore);\n  justify-content: space-between;\n  align-items: center;\n}\ndiv[header] div:nth-child(2) {\n  display: flex;\n  align-items: center;\n}\n\ndiv[footer] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between !important;\n}\n\n.error {\n  color: #db4437;\n  padding-bottom: 1em;\n}\n\n.progress {\n  padding: 2em;\n  font-size: 1.2em;\n}\n\n.date {\n  width: 6em;\n  flex-grow: 0 !important;\n}\n\nmaterial-dialog[confirm] {\n  background-color: var(--settingsBodyBack);\n  color: var(--settingsBodyFore);\n}\nmaterial-dialog[confirm] .content {\n  font-size: 120%;\n  padding: 2em;\n}\nmaterial-dialog[confirm] .content .marked {\n  padding: 1em 0;\n  font-weight: bold;\n}\n\nlogin ::ng-deep #btnLogin:not([disabled]) {\n  background-color: #a52714;\n}\n\n.pdfSliderHead {\n  display: flex;\n  width: 90%;\n  padding: 1em;\n}\n\n.sub {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  text-align: justify;\n}\n\n.pdfSlider {\n  display: flex;\n  flex-direction: row;\n  width: 90%;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 1em;\n  margin-bottom: 2em;\n}\n.pdfSlider > div {\n  width: 5%;\n}\n\nmaterial-input ::ng-deep .focused-underline {\n  background: var(--settingsHeaderBack);\n}\nmaterial-input ::ng-deep .focused.label-text {\n  color: var(--settingsHeaderBack);\n}\n\nmaterial-fab.is-local, div.is-local, material-button.is-local {\n  background: var(--localBack) !important;\n  color: var(--localFore) !important;\n}\n\n.navControls {\n  display: flex;\n  align-items: center;\n  font-size: 0.7em;\n}\n\n#exportForm {\n  display: none;\n}\n\n#importData {\n  display: none;\n}\n'];