final List<dynamic> styles = ['body {\n  --primaryBack: #055524;\n  --primaryFore: white;\n  --secondaryBack: #57bb8a;\n  --secondaryFore: black;\n  --debugFirst: #220;\n  --debugSecond: #550;\n  --debugFore: #ffeb3b;\n  --settingsHeaderBack: #006064;\n  --settingsHeaderFore: #b2ebf2;\n  --settingsBodyBack: #4dd0e1;\n  --settingsBodyFore: black;\n  --settingsScrollThumb: #0097a7;\n  --legalHeaderBack: #e65100;\n  --legalHeaderFore: #ffe0b2;\n  --legalBodyBack: #ffb74d;\n  --legalBodyFore: black;\n  --legalScrollThumb: #f57c00;\n  --whatsnewHeaderBack: blue900;\n  --whatsnewHeaderFore: blue100;\n  --whatsnewBodyBack: blue500;\n  --whatsnewBodyFore: black;\n  --whatsnewScrollThumb: blue700;\n  --localFore: purple500;\n  --localBack: purple100;\n  --betaFore: green800;\n  --betaBack: transparent;\n  --pdfBtnBack: red400;\n  --pdfBtnFore: rgba(255, 255, 255, 0.8);\n  --pdfInfoFore: rgba(0, 0, 0, 0.7);\n  --sendMarked: lightBlue800;\n  --googleSignedout: red400;\n  --loopMarked: #a0a0ff;\n  --printparamsHeaderBack: #b71c1c;\n  --printparamsHeaderFore: #ffcdd2;\n  --printparamsBodyBack: #e57373;\n  --printparamsBodyFore: black;\n  --printparamsScrollThumb: #d32f2f;\n  --shortcutHeaderBack: #afb42b;\n  --shortcutHeaderFore: #afb42b;\n  --shortcutBodyBack: #afb42b;\n  --shortcutBodyFore: #afb42b;\n  --shortcutScrollThumb: #ff0000;\n}\n\n.betaBox {\n  box-shadow: 0 0 10px 3px #00ffff;\n}\n\n.betaText {\n  animation: glowing 1s linear infinite alternate;\n}\n\n@keyframes glowing {\n  0% {\n    text-shadow: 0 0 0px;\n  }\n  100% {\n    text-shadow: 0 0 30px;\n  }\n}\n.iconButton material-icon,\n.iconButton img {\n  margin-right: 1em;\n}\n\n.imageButton img {\n  height: 16px;\n  margin-right: 1em;\n}\n\n.controls {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n}\n.controls .label {\n  padding-right: 2em;\n}\n.controls material-fab:not([disabled]) {\n  background-color: var(--printparamsHeaderBack);\n  color: var(--primaryFore);\n}\n\n.functions {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.functions > div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.functions > div div:first-child {\n  margin-left: 10px;\n}\n.functions > div div {\n  padding-right: 1em;\n}\n\nmaterial-dialog[main] {\n  min-width: 80%;\n}\nmaterial-dialog[main] ::ng-deep main::-webkit-scrollbar {\n  width: 16px;\n}\nmaterial-dialog[main] ::ng-deep main::-webkit-scrollbar-track {\n  background-color: var(--printparamsBodyBack);\n}\nmaterial-dialog[main] ::ng-deep main::-webkit-scrollbar-thumb {\n  background-color: var(--printparamsScrollThumb);\n}\nmaterial-dialog[main] ::ng-deep main {\n  scrollbar-color: var(--printparamsScrollThumb) var(--printparamsBodyBack);\n}\nmaterial-dialog[main] ::ng-deep .wrapper > header {\n  /*! @noflip */\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\nmaterial-dialog[main] ::ng-deep .wrapper > main, material-dialog[main][headered] ::ng-deep .wrapper > main {\n  padding: 0;\n}\n\nmaterial-dialog.headered-dialog ::ng-deep .wrapper > header, material-dialog.headered-dialog[headered] ::ng-deep .wrapper > header {\n  background-color: var(--printparamsHeaderBack);\n}\nmaterial-dialog.headered-dialog ::ng-deep .wrapper > footer, material-dialog.headered-dialog[headered] ::ng-deep .wrapper > footer {\n  background-color: var(--printparamsHeaderBack);\n  color: var(--printparamsHeaderFore);\n  padding: 0;\n}\nmaterial-dialog.headered-dialog[headered] ::ng-deep .wrapper ::ng-deep h1 {\n  background-color: var(--printparamsHeaderBack);\n  color: var(--printparamsHeaderFore);\n}\n\n.root {\n  padding: 1em;\n  font-size: 1.2em;\n  color: var(--printparamsBodyFore);\n  background-color: var(--printparamsBodyBack);\n}\n\n.languagePanel {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.subtitle {\n  display: flex;\n  flex-direction: row;\n  color: var(--printparamsHeaderBack);\n  font-size: 1.5em;\n  padding-bottom: 0.5em;\n  align-items: center;\n  justify-content: space-between;\n}\n.subtitle ::ng-deep div {\n  display: flex;\n}\n.subtitle ::ng-deep .comparable {\n  flex: 1;\n  font-size: 0.7em;\n  justify-content: flex-end;\n}\n.subtitle ::ng-deep .comparable ::ng-deep material-toggle.themeable .material-toggle.checked:not(.disabled) .tgl-bar {\n  background-color: var(--printparamsHeaderBack);\n}\n.subtitle ::ng-deep .comparable ::ng-deep material-toggle.themeable .material-toggle.checked:not(.disabled) .tgl-btn {\n  background-color: var(--printparamsHeaderBack);\n}\n.subtitle ::ng-deep .comparable ::ng-deep material-toggle.themeable .tgl-btn-underlay.under-focus else {\n  background-color: rgba(188, 188, 188, 0.24);\n}\n.subtitle ::ng-deep .comparable ::ng-deep material-toggle.themeable .tgl-btn-underlay.under-focus.under-checked {\n  background-color: rgba(var(--printparamsHeaderBack), 0.24);\n}\n\ndiv[header] {\n  display: flex;\n  flex-direction: row;\n  color: var(--printparamsHeaderFore);\n  justify-content: space-between;\n  align-items: center;\n}\ndiv[header] div:nth-child(2) {\n  display: flex;\n  align-items: center;\n}\n\ndiv[footer] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between !important;\n}\n\n.progress {\n  padding: 2em;\n  font-size: 1.2em;\n}\n\nmaterial-input ::ng-deep .focused-underline {\n  background: var(--printparamsHeaderBack);\n}\nmaterial-input ::ng-deep .focused.label-text {\n  color: var(--printparamsHeaderBack);\n}\n\n.timeshift div {\n  padding-top: 0.5em;\n  padding-bottom: 1em;\n}\n\n::ng-deep material-checkbox.pp:not(.disabled) .icon-container .icon.filled {\n  color: var(--printparamsHeaderBack);\n}\n\n.indent {\n  margin-left: 2em;\n}\n\n.selectButton {\n  background: var(--printparamsHeaderBack);\n  color: var(--printparamsHeaderFore);\n  padding: 0.2em;\n  padding-left: 0.4em;\n  border-radius: 2px;\n}\n\n.selectSelect ::ng-deep material-select-item.selected {\n  color: var(--printparamsBodyFore);\n}\n.selectSelect ::ng-deep material-select-item:not(.multiselect).selected {\n  background: var(--printparamsBodyBack);\n}\n.selectSelect ::ng-deep material-list {\n  background-color: var(--printparamsHeaderBack);\n  padding: 0;\n}\n.selectSelect ::ng-deep material-list material-select-item {\n  display: flex;\n  flex-direction: column;\n  line-height: initial;\n  align-items: flex-start;\n  padding: 0.2em 0.5em;\n  color: var(--printparamsHeaderFore);\n}\n.selectSelect ::ng-deep material-list material-select-item div.itemSub {\n  font-size: 75%;\n}\n.selectSelect ::ng-deep material-list material-select-item .selected-accent {\n  background-color: var(--printparamsBodyBack);\n  color: var(--printparamsBodyFore);\n}\n.selectSelect ::ng-deep material-list material-select-item:hover {\n  background-color: var(--printparamsBodyBack);\n}\n\nmaterial-button[raised] {\n  background-color: var(--printparamsHeaderBack);\n  color: var(--printparamsHeaderFore);\n}\n\n.loop ::ng-deep .icon {\n  border-radius: 50%;\n  border: 2px solid var(--loopMarked);\n  background-color: var(--loopMarked);\n}\n\nmaterial-dropdown-select {\n  margin-bottom: 0.2em;\n}\n'];