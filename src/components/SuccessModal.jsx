import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "white",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

function SuccessModal({ isVisible, toggle }) {
  return (
    <Modal
      open={isVisible}
      onClose={toggle}
      aria-labelledby="modal-modal-title"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Success!
        </Typography>
      </Box>
    </Modal>
  );
}

export default SuccessModal;
