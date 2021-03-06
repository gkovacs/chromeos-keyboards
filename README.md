# chromeos-keyboards

Input methods providing shortcuts for ChromeOS. They can be loaded as extensions.

## Keyboard Layouts

### colemakshortcuts

This input method adds the Colemak keyboard layout to ChromeOS, including various shortcuts. The Colemak layout is described at https://colemak.com/ . The procedure for adding a keyboard layout to ChromeOS and using it is described in the installation section.

This keyboard layout will be Colemak when typing letters. It will keep the shortcut keys (ie ctrl+f) as QWERTY however. Additionally, if you disable the Alt key, then it will create some additional combinations with the Alt key, which are described in the shortcuts section.

### qwertyshortcuts

This adds the QWERTY keyboard layout to ChromeOS, including various shortcuts. The procedure for adding a keyboard layout to ChromeOS and using it is described in the installation section.

## Installation
### Chrome Store

This is currently getting repeatedly rejected from the Chrome store so no link yet. But once it gets approved the procedure will be

1. Install extension from Chrome store
2. Logout and then login again. (This may not be necessary.)
3. Go to chrome://settings/languages.
4. Add the keyboard Colemak with Shortcuts or QWERTY with Shortcuts
5. Select keyboard layout  Colemak with Shortcuts or QWERTY with Shortcuts

### GitHub

1. Go to chrome://extensions.
2. Click on "Load unpacked extensions...".
3. Pick the directory containing the manifest for the extension you want to
enable.
4. Logout and then login again. (This may not be necessary.)
5. Go to chrome://settings/languages.
6. Add the keyboard Colemak with Shortcuts or QWERTY with Shortcuts
7. Select keyboard layout  Colemak with Shortcuts or QWERTY with Shortcuts

## Shortcut list

These shortcuts are described according to QWERTY keyboard locations.

To use them, you will need to disable the Alt key first, by going to settings -> keyboard -> shortcuts, then disable the Alt key.

When you switch to the input method, you can then use the shortcuts.

### Arrow keys

```
Down Alt+d

Up Alt+e

Right Alt+f

Left Alt+s

Home Alt+a

End Alt+g
```

### Punctuation

```
~ Alt+z

+ Alt+x

_ Alt+c

= Alt+v

- Alt+b
```

### License

MIT

### Author

[Geza Kovacs](https://github.com/gkovacs)

