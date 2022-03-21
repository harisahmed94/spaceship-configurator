# Spaceship Configurator

Here is the solution of the task. I am providing a brief documentation for the approach I followed and the technologies I used.

This solution is implemented using:

- TypeScript React
  Tried to structure the app into small resuseable components which might seem a bit overboard for a small application like this, but it will scale well in bigger projects.

- SASS and CSS modules
  Used SASS for writing styles because it was mentioned in the task description, but my preffered way to write CSS would have been using styled components. Global styles have been used in addition with CSS modules to avoid naming conflicts. Additionaly, I have used BEM for naming CSS classes as it helps coming up with meaningful names and makes it easier to understand role of each class in a component's stylesheet.

- webpack
  Used webpack for bundling and developing the app. Only did configuration for development and the config is not optimized for production build.
