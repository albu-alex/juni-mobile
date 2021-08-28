<script>
export default {
  // avatar: The link which directs to the avatar of an user
  // isOwner: Holds the password of a certain user and if the password is "owner", then the user is the owner
  // username: The username of an user
  props: {
    avatar: String,
    username: String,
    isOwner: String
  },
  name: "UserDetails",
}
</script>