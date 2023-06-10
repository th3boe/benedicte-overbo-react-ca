# Semester-Project-2-YSA

![image](/src/images/ecom-preview-image.png)

Above is a screenshot of the front page and cart page of e-commerce site, displaying products and cart items. This page was created as part of a course assignment on react.

[![Netlify Status](https://api.netlify.com/api/v1/badges/b0bbdff6-5ce9-4b85-89dc-b19e3f7f973f/deploy-status)](https://app.netlify.com/sites/boe-com/deploys)

## Introduction

The e-commerce page was created as part of a course assignment on react. The given brief was to create a e-commerce site with product cards on the front page. The user should then be able to add items to cart when they have entered the specific product card.

_"You are tasked with build out the following pages for an eCom store:_

1. Homepage
2. Individual product page
3. Cart page
4. Checkout success page

_There will also be a contact page which will contain a contact form with the following fields. There must be form validation:_

1. Full name (Minimum number of characters is 3, required)
2. Subject (Minimum number of characters is 3, required)
3. Email (Must be a valid email address, required)
4. Body (Minimum number of characters is 3, required)

_The brief is much more in depth, but this is the requirements in short."_

I wanted my e-commerce site to have calming colors and be something a bit different than the average black, white and grey online shopping site.

Built using CSS frameworks and React JS.

## CheckList for delivery

### The site must contain:

- [x] On the homepage, loop through the products and display a Product component for each of the values. This Product component should look like a product card.
- [x] The homepage should have a lookahead/auto-complete Search bar component. Typing values in the search bar should display products where the title matches the search input.
- [x] On the ProductPage, use the ID of the product as the params for the dynamic segment. Add the product details as mentioned in the brief.
- [x] Create a cart state. When the Add to cart button on the ProductPage is clicked, add the product to the cart.
- [x] Clicking on the Cart Icon component will take the user to the CheckoutPage page.
- [x] The CheckoutPage must list all of the products in the cart, show a total at the bottom and a Checkout button.
- [x] Clicking the Checkout button will take the user to the CheckoutSuccessPage.
- [x] The CheckoutSuccessPage should display that the order was successful and clear the cart. There should be a link to go back to the store.
- [x] On the ContactPage, create the given inputs, and console.log the data from the form.

### WCAG

The website has been WCAG checked several times during the creation process. Some of what has been checked is the color palette and that the contrast is okay for people suffering from vision impairments. Alt text has also been added to images for when the page needs to be used with voiceover, for example "Siri".

This is just some of what has been checked, contrast and colors is a very important factor for a page to be useful for the average audience.

## Description

### What went well on the project

React coding went surpisingly well for it to be the first time it was ever tested by me. I found the design process also ended with a very neat result.

### Logo

The logo was built to be remembered and to be playful. The icon would attract the inner child of the adult using, and be easily remembered by kids. After all, when thinking of a good old fashioned Yard Sale most of us would think of the bright red wagon in a yard.

![image](/src/images/logo.png)

### Design choice

The design choice for this project was to keep it simple yet completely different from the ordinary online shopping site.

The chosen color palette was a calming green combined with white. I wanted the page to be easy on the eyes, while also having a design that was easy to navigate.

The breif asked for some specifics for the design, which was cart button with a number on the side that counts the amount of items added to cart, products displayed as cards, the product cards should display the correct percentage if the product is on sale. Lastly "add to cart" button on the specific product page.

I could not resist, so I added an animation that I created a while back to the success page for checkout.

### React

The used JS type for this project was React. The react code was created using some online inspiration and inspiration from the modules from school.

What I found was that react made a lot of functionality simpler. But also more complicated.

### Built With

- [REACT](https://react.dev/)
- [Bootstrap](https://react-bootstrap.netlify.app/)

## Getting Started

### Installing

The project repository can be cloned using this link:

```bash
git clone https://github.com/th3boe/benedicte-overbo-react-ca.git
```

Which you can open using Visual Studio Code or another code editor.

The repository has some connected dependencies which can be accessed using terminal:

Install:

```bash
npm i
```

Run build and live-server:

```bash
npm run start
```

The API used for this brief is:

https://api.noroff.dev/api/v1/online-shop

### Contributing

If someone would want to help with the project or collaborate on it, they could fork the repo, which could later be merged.

### Contact

If you want to get in contact with me (the developer), you can look me up on my animation portfolio or Linkedin page.

[My Animation Portfolio](www.boe3am.com)

[My LinkedIn page](https://www.linkedin.com/in/benedicte-%C3%B8verb%C3%B8-9b35b2162/)
