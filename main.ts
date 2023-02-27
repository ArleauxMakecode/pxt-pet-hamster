input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
