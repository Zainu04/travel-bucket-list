# travel-bucket-list
# WEB103 Project 1 - *Travel Bucket List*

Submitted by: **Zainab Akhtar**

About this web app: **A travel bucket list web app that displays dream destinations around the world. Users can browse a grid of destinations, click on each one to view detailed information (including cost, best season, food, tips, and must-dos), and navigate using unique URL routes for each destination. The app is built using Node.js, Express, HTML, CSS, and JavaScript with a PicoCSS-styled frontend.**

Time spent: **4** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as as `http://localhost:3000/destinations/dubai-uae` and `http://localhost:3000/destinations/doha-qatar`**
  - [x] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation* 
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] Custom travel-themed UI with hero section and card-based layout
- [x] REST API endpoints (`/api/destinations` and `/api/destinations/:slug`)
- [x] Dynamic routing using Express for each destination detail page
- [x] Responsive design using PicoCSS and custom CSS styling

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='images/Kapture 2026-06-07 at 00.22.32.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One of the main challenges was setting up dynamic routing so each destination had its own unique URL and detail page. Another challenge was ensuring the frontend properly fetched data from the Express API and rendered it dynamically without page reload issues.

## License

Copyright [2026] Zainab Akhtar

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
