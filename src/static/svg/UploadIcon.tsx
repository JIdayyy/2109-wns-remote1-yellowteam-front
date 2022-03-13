/* eslint-disable react/require-default-props */
import * as React from 'react'

interface IProps {
  width?: string
  height?: string
}

const UploadIcon = ({ width = '150', height = '150' }: IProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 63 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="62.0725" height="62.0725" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_64_102" transform="scale(0.0104167)" />
      </pattern>
      <image
        id="image0_64_102"
        width="96"
        height="96"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)

export default UploadIcon
