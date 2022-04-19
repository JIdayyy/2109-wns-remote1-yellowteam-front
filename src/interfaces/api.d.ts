interface ICard {
  id: string
  title: string
  button: string
  modal: ({ isOpen, onClose }: IProps) => JSX.Element
}
