# Flat UI Colors
## A collection of Flat UI colors.

This is a collection of colors for your flat designs.

## Usage

The useage of the flat-colors os quiete easy. Just copy the CSS file into your project and use the classes.
```
<link rel="stylesheet" href="css/flat-colors.min.css">
```

## Installation

### Clone from git
You can clone the git repository to your project
```
git clone https://github.com/georg94/flat-colors.git
```

### Download as zip
You can also download the Project as zip folder.

https://github.com/georg94/flat-colors/archive/master.zip

After downloading you can extract the folder and copy the css files to your project.

## Edit flat-colors

Of course you can also add your own colors or change the existing ones.

flat-colors is compiled with less. Thatfore I am using grunt.
Clone the repository
```
git clone https://github.com/georg94/flat-colors.git
```

Then go into the project folder and download the dependencies with `npm install`.

Now you can run grunt (`grunt`) inside the folder.

Grunt will execute less and compile the `less/flat-colors.less` to a normal css and minified css.

If you want grunt to compile the less when you save it run `grunt watch`

## Example

```
<html>
  <head>
    <link rel="stylesheet" href="css/flat-colors.min.css">
  </head>
  <body>
    <span class="bg-river clouds">
      This Text has a nice blue background and a cloudy font color.
    </span>
  </body>
</html>
```