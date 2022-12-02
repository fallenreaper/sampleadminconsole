This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Purpose

This was written as redo to a youtube video, https://www.youtube.com/watch?v=wYpCWwD1oz0 which was written using _Create React App_ which I am not a fan of.  So this was written with NextJS and Typescript in mind.  I wanted to use up to date NPM Packages as well, since I noticed there were differences in implementaton of packages.

See Notes Below.

## Getting Started

First, run the development server:

```bash
npm run dev
# or for Prod
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Notes

I have noticed a few things while working through this, which was a learning experience for me as I was learning react while I went.  While most of my background is AngularTS or other languages in general, after I did the NextJS Tutorials, this youtube video above allowed me to go deeper into some of the various concepts.

- All files in Pages are going to be endpoints, so faq.tsx correlates to /faq.  similarly if you nest more folders, you can create a deep structure.
- API Endpoints would exist in pages/api, BUT since we didnt need them, i deleted it from this project.
- I abstracted non page items to a components section for organization, same with non components going into Utilities.
- I did not overcreate files, and if they are 1-off classes created for 1 component, i would keep them all in that file.
- Unlike Angular, which does a { markup, css, ts } design, this is just a singular file, where you colorize everything inside of it.
- UseTheme and seeing up a means to do a dark/light mode allows you to easily reference 1 CSS color throughout the app, and it will auto update when you toggle.  I was thinking of something similar, and was wishing for a better way to manage it, BUT it seems like it works well.  It also exists as it does to help the Material UI flow.
- CSS can be created IN Component but also can reference a Globals CSS file, as well as a by Module CSS.  For me personally, I like having a by component CSS color scheme, which if needed pulls from globals.   That way it can easily group styles together and not risk problems of overriding or using the wrong thing.  I didnt actually end up implementing it here because I wanted to keep this closely aligned with the OP Video.
- Even though images exist, most of the Components use Module Icons instead of images which is why public is empty.
- in pages, there are some key files.  Index is used as your base page, which is populated through _app.tsx.  So the _app will create the base layout, and then Each component endpoint is referenced and loaded into the correct spot.


## Key Note I still need to complete:

I am currently working on the Dark/Light most to properly toggle.  It seems that is currently a bit of an issue with this app when toggling and properly pushing the colors throughout the application.