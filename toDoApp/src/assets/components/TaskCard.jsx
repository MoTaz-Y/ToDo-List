import "./taskcard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { Box, Tooltip } from "@mui/material";
import Tag from "./Tag";

const TaskCard = () => {
  return (
    <Card
      sx={{
        minWidth: 375,
        border: "1px solid #dfe3e6",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
        padding: "20px",
        margin: "20px",
        textAlign: "left",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          this is a simple text
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
      </CardContent>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
        </Typography>
        <CardActions>
          <Tooltip title="Delete">
            <Button size="small" color="error" sx={{ padding: "1px 3px" }}>
              {" "}
              <FontAwesomeIcon icon={faTrashCan} className="button_icon" />
            </Button>
          </Tooltip>
          <Tooltip title="Doing">
            <Button size="small" color="warning">
              {" "}
              <FontAwesomeIcon icon={faAnchor} className="button_icon" />
            </Button>
          </Tooltip>
          <Tooltip title="Complete">
            <Button size="small" color="success">
              {" "}
              <FontAwesomeIcon icon={faCheck} className="button_icon" />
            </Button>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  );
};

export default TaskCard;
