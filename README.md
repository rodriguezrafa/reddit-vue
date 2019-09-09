# reddit-vue

Vue SPA for listing Reddit Post. This is a test for a FrontEnd Role

### Step by Step

After setting the project up with Vue CLI 3, I usuallu start by creating the component list Iĺl be using during the project. After that I start with the HTML and CSS code because most of the time the backend team is working at the same time in the models and some other stuff Iĺl be needing in some part, so fetching the real data will be the last thing Iĺl do.

I created a Trello Kanban board to keep track of each step just for this test because in dayly bases I use Jira but there's no need of creating new branches for such a small project

# Enjoy

1. Layout & Responsiveness

    There's a simple flexbox grid. The left column will hide at 992px or less and there will be a toggle menu button to show the post list


2. Initial configurations for vuex

    I'll use the vue store management (vuex) to have all the posts and the variables centralized so I don't have to send data to child component via prop

    There's  a logic on load where I check the LocalStorage and in case that the code finds a variable with a Post List it will compare it with  the received data from the request to the reddit API. This was solution I implemented for the persistency

3. Look&feel and data implementation

    Added styles for the SPA, hover transitions, icons (took a bit of time looking for the assets and modifiying them to match the request).

    Also implemented the data in the store to render the post list and the detail showed

4. Post Details.

    To show post details after clicking the Card body in the list, I exexute a Vuex action with the index of the clicked card where first, I change the "clicked" property of that object to True and then I take the selected object using the index and save it into a postDetail property in the state. And Second, in that same action, I update the postList property and save it into the LocalStore for persistence

5. Dismiss single and all posts

    To dismiss a single post a vuex action is executed with the  posts index and the only necessary thing if to run a splice methond on the postList with the index. For Dismissing all post another vuex action is execute and it remplaces the postList array with an empty array

    There a transition-group tag on the code to allow me to add an effect when a single or all post are removed.
