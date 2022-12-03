# chrome-extension-starter

## Install
### Clone the project
```bash
git clone --depth 1 https://github.com/vdegenne/chrome-extension-starter.git extension_name
```
```diff
! change extension_name with whatever you want to name your extension
```

### Enter the directory (Esc+. on Unix to paste the last argument, extension_name here)
```bash
cd extension_name
```
### Remove the git directory
```bash
rm -rf .git
```
### If your extension needs typescript, install the dependencies
```bash
npm i
```

## Modify the `manifest.json` file

You may want to change the `name` and the `content_scripts` keys


## Load the extension into your browser
