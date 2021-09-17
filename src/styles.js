import { makeStyles } from "@material-ui/core/styles"; //its a name import and not a default import
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    //run this css only for small devices
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
