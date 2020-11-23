radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
    } else {
        if (receivedNumber == 2) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0)
            motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 0)
            motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 0)
        } else {
            if (receivedNumber == 3) {
                motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
                motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 255)
                motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
            } else {
                if (receivedNumber == 4) {
                    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
                    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
                    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
                    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
                } else {
                    if (receivedNumber == 5) {
                        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
                        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 0)
                        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 0)
                        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
                    } else {
                        if (receivedNumber == 6) {
                            motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 0)
                            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
                            motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
                            motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 0)
                        } else {
                            if (receivedNumber == 7) {
                                motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 0)
                                motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
                                motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 255)
                                motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 0)
                            } else {
                                if (receivedNumber == 8) {
                                    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
                                    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 0)
                                    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 0)
                                    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
                                } else {
                                    if (receivedNumber == 9) {
                                        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
                                        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
                                        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
                                        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
                                    } else {
                                        if (receivedNumber == 10) {
                                            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
                                            motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
                                            motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 255)
                                            motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
radio.setGroup(1)
