import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const Signup = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Card className='w-65'>
                <CardHeader>
                    <div className="flex justify-between">
                        <CardTitle>Register</CardTitle>
                        <Button variant="link">Sign Up</Button>
                    </div>
                    <CardDescription>Sign in to get started</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-2">
                        <Label>Email</Label>
                        <Input></Input>
                        <Label>Password</Label>
                        <Input></Input>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col justify-center items-center gap-2">
                    <Button className='w-full'>Sign in</Button>
                    <Button variant="link" className='w-full'>Sign in with google</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Signup