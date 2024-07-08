import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";

type Props = {
  isOpen: boolean;
  handleClose(): void;
  title: string;
  content: React.ReactNode;
  footer: React.ReactNode;
};

export default function Modal({
  isOpen,
  handleClose,
  title,
  content,
  footer,
}: Props) {
  const { Dialog, Header, Title, Body, Footer } = BootstrapModal;

  return (
    <BootstrapModal show={isOpen} onHide={handleClose}>
      <Header closeButton>
        <Title>{title}</Title>
      </Header>
      <Body>{content}</Body>
      <Footer>{footer}</Footer>
    </BootstrapModal>
  );
}
