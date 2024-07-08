import { Button } from "@bxreact/button/index";
import { Modal, listRequestsTexts } from "../../../../shared/ui";

type Props = {
  isOpen: boolean;
  handleClose(): void;
};

export default function NewBookingModal({ isOpen, handleClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      title={listRequestsTexts.LIST_REQUEST_NEW_BOOKIN_MODAL_HEADER_TITLE}
      content={<div>modal</div>}
      footer={
        <div className="d-flex gap-3">
          <Button
            type="button"
            outline
            size="md"
            className="ps-5 pe-5"
            onClick={handleClose}
          >
            <span data-testid="btn-close-modal">
              {listRequestsTexts.LIST_REQUEST_NEW_BOOKIN_MODAL_FOOTER_CANCEL}
            </span>
          </Button>
          <Button
            type="button"
            size="md"
            className="px-5"
            onClick={() => {}}
          >
            <span>{listRequestsTexts.LIST_REQUEST_NEW_BOOKIN_MODAL_FOOTER_SEND}</span>
          </Button>
        </div>
      }
    />
  );
}
