<script>
import Feedback from "./Feedback";
import UserDetails from "./UserDetails";
export default {
  components: {Feedback, UserDetails},
  props: {
    text: String,
    imageLink: String,
    avatar: String,
    username: String
  },
  name: "PageLayout"
}
</script>