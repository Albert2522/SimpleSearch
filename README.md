## SimpleSearch (Flex project sampel proposal)

### Background

Simple Search is an application that will allow users to search for an item they are interested in buying.  The goal of the applications is to combine all items for sale from Ebay, Amazon, and Craigslist to make it easier for the user to find the best item suited for their particular interest.  Simple Search will also include tracking items to account for the user choice of not wanting to purchase at that time.

### Functionality & MVP

With this version, users will be able to:

- [ ] Make a combined search on Ebay, Amazon and Craigslist,
- [ ] Set up Filter options for Search:
          choose one of the platforms or all of them to search
          put the maximum or minimum price for them
- [ ] Sort search results by platform, price, and listed data
- [ ] For each found item see detailed information, including all photos,
        description and link to watch it on original site
- [ ] Add this Item to "Track Items" and get a notification if the new item will be listed on these platforms
- [ ] Advertise application to spread the word and get user traffic.

### Wireframes

![wireframes](https://raw.githubusercontent.com/Albert2522/SimpleSearch/master/wireframes/Tree%20Structure.png)
![wireframes](https://raw.githubusercontent.com/Albert2522/SimpleSearch/master/wireframes/Simple%20Main%20Screen.png)
![wireframes](https://raw.githubusercontent.com/Albert2522/SimpleSearch/master/wireframes/Single%20Item%20Screen.png)

### Technologies & Technical Challenges

We will use React-Native to make the IOS version of an application. We see the advantage to use the React-Native framework
in this project, because the code will need just minor changes to make it workable for Android platform.

To speed up the design of the project and easily implement different features we will use and adjust ready components available on
https://facebook.github.io/react-native/docs/

Besides Javascript, Redux library and CSS for styling we use:

- [ ] React-Native-Cli as a Rect command line interface
- [ ] Xcode 8.2.1 with IOS simulator to build our IOS app
- [ ] Amazon Web-services API AWS SDK for Javascript
- [ ] Ebay Requests API for Javascript
- [ ] Craigslist Search Driver for javascript (node-craigslist)

### Group Members & Work Breakdown

Our group consists of two members, Albert Abdrashitov and Harrison Bui.

Albert's primary responsibilities will be:

- Creating a components structure for the project and describe all props and state for them
- Setting up the IOS database communication with a React platform
- Combining 3 APIs in one Requests API using it in the project
- Implement Home App component and helping with other components

Harrison's primary responsibilities will be:

- Implementing  Item react-native component
- Implementing  Search Result react-native component
- Design and styling of all components
- Testing the communication between all components

### Implementation Timeline

**Day 1**: Install and prepare React-Native framework for an application development. Explore open source code IOS apps built with react-native.
Explore APIs and make necessary installations.


**Day 2**: Work on the general structure, Home and Search Result components:
- Albert: Implement a redux structure, work on home component.  
- Harrison: search-result component, helping with the home component.

**Day 3**: Complete API's requests util and connect it with components. Work on design already built components.
- Albert: Implement API's requests for searching specific items.  
- Harrison: Designing of home and search components.

**Day 4**: Complete filter and sort features in back-end, make them workable in app. Implement Item and Track Item components.
 Set up notifications for new listed Items.

- Albert: Filter and sort features in back-end. Notifications for new items in Track Items components. Prepare back-end for both components.
- Harrison: Design and implementation Track Items and Item components.

**Day 5**: Create demo page for the project.
- Albert: Implement ios-emulator on a web-page.
- Harrison: Design ios emulator walkthrough for user when using application.
- Both: Market application to X amount of people to increase traffic flow. 


Bonus features:
- Post sale listings on all platforms using this app.
- Connect more platforms APIs to the app.
