import React from 'react';

class Key extends React.Component {
  render() {
    const {
      className,
      left,
      width,
      height,
      onNoteStart,
      onNoteStop,
      gliss,
      children,
      touchEvents,
    } = this.props;

    return (
      <div
        className={className}
        style={{
          top: 0,
          left: left,
          width: width,
          height: height,
        }}
        onMouseDown={touchEvents ? null : onNoteStart}
        onMouseUp={touchEvents ? null : onNoteStop}
        onMouseEnter={gliss ? onNoteStart : null}
        onMouseLeave={onNoteStop}
        onTouchStart={touchEvents ? onNoteStart : null}
        onTouchCancel={touchEvents ? onNoteStop : null}
        onTouchEnd={touchEvents ? onNoteStop : null}
      >
        <div className="ReactPiano__NoteLabel">{children}</div>
      </div>
    );
  }
}

export default Key;