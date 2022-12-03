# chrome-extension-starter

## Install
### clone to a new project directory (appname)
```bash
git clone --depth 1 https://github.com/vdegenne/chrome-extension-starter.git extension_name
```
### enter the directory (Esc+. on Unix to paste the last argument, appname here)
```bash
cd appname
```
### remove the git directory
```bash
rm -rf .git
```
### If your extension needs typescript, install the dependencies
```bash
npm i
```

## Modify the `manifest.json` file

You may want to change the `name` and the `content_scripts` keys