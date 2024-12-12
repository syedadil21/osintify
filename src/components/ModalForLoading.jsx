import { Button, CircularProgress, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

const ModalForLoading = ({isOpen, onOpenChange}) => {
  return (
      <Modal
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          closeButton={false}
          hideCloseButton
      >
          <ModalContent>
              {(onClose) => (
                  <>
                      <ModalHeader className="flex flex-col gap-1">Fetching data, Please Wait.</ModalHeader>
                      <ModalBody className='flex justify-center items-center w-full'>
                          <CircularProgress size='lg' aria-label="Loading..." />;
                      </ModalBody>
                      {/* <ModalFooter>
                          <Button color="danger" variant="light" onPress={onClose}>
                              Close
                          </Button>
                          <Button color="primary" onPress={onClose}>
                              Action
                          </Button>
                      </ModalFooter> */}
                  </>
              )}
          </ModalContent>
      </Modal>
  )
}

export default ModalForLoading
