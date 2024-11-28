
import { Alert, AlertDescription } from '@/Components/ui/alert';
import { Button } from '@/Components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <div className="space-y-6">
        <Alert variant="destructive">
          <AlertDescription>
            Once your account is deleted, all of its resources and data will be permanently deleted. 
            Before deleting your account, please download any data or information that you wish to retain.
          </AlertDescription>
        </Alert>
  
        <Dialog open={confirmingUserDeletion}   onOpenChange={(isOpen) => setConfirmingUserDeletion(isOpen)}>
        <DialogTrigger asChild>
            <Button className="bg-red-600" onClick={confirmUserDeletion}>Delete Account</Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={deleteUser}>
              <DialogHeader>
                <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Please enter your password to confirm you would like to permanently delete your account.
                </DialogDescription>
              </DialogHeader>
              <div className="my-6">
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  ref={passwordInput}
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  placeholder="Password"
                  required
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">{errors.password}</p>
                )}
              </div>
              <DialogFooter>
                <Button type="button"  onClick={closeModal}>
                  Cancel
                </Button>
                <Button type="submit"  disabled={processing}>
                  {processing && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                  Delete Account
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
}
