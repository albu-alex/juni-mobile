<script>
import Feedback from "./Feedback";
import UserDetails from "./UserDetails";
export default {
  components: {Feedback, UserDetails},
  // text: The text of the post
  // imageLink: an array with all the image URLs that the user wants to add to it's post
  // avatar: The link which directs to the avatar of an user
  // username: The username of an user
  // isOwner: Holds the password of a certain user and if the password is "owner", then the user is the owner
  props: {
    text: String,
    imageLink: Array,
    avatar: String,
    username: String,
    isOwner: String
  },
  name: "PageLayout"
}
</script>