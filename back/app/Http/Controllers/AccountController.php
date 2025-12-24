<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
// use Illuminate\Support\Facades\Auth; 

class AccountController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:8',
                'name' => 'required|string|max:50',
            ]);

            $user = User::create([
                'email' => $validated['email'],
                'password' => bcrypt($validated['password']),
                'name' => $validated['name'],
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'status' => 'success',
                'data' => [
                    'user_id' => $user->id,
                    'email' => $user->email,
                    'name' => $user->name,
                    'token' => $token,
                    'created_at' => $user->created_at->toISOString(),
                ],
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->errors(),
            ], 422);

        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Internal server error',
            ], 500);
        }
    }

    public function login(Request $request)
    {
        try {
            $validated = $request->validate([
                'email' => 'required|email',
                'password' => 'required|string',
            ]);

            $user = User::where('email', $validated['email'])->first();

            if (!$user || !Hash::check($validated['password'], $user->password)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Invalid email or password',
                ], 401);
            }

            $user->tokens()->delete();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'status' => 'success',
                'data' => [
                    'user_id' => $user->id,
                    'email' => $user->email,
                    'name' => $user->name,
                    'token' => $token,
                ],
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->errors(),
            ], 422);

        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Internal server error',
            ], 500);
        }
    }

    public function updateMe(Request $request)
{
    try {
        $validated = $request->validate([
            'email' => 'nullable|email',
            'name' => 'nullable|string|max:50',
            'icon_url' => 'nullable|string',
        ]);

        $user = User::first();

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found',
            ], 404);
        }

        if (!is_null($validated['email'] ?? null)) {
            $user->email = $validated['email'];
        }

        if (!is_null($validated['name'] ?? null)) {
            $user->name = $validated['name'];
        }

        if (!is_null($validated['icon_url'] ?? null)) {
            $user->icon_url = $validated['icon_url'];
        }

        $user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'プロフィールの更新ができました',
            'data' => [
                'user_id' => $user->id,
                'email' => $user->email,
                'name' => $user->name,
                'icon_url' => $user->icon_url,
            ],
        ], 200);
    } catch (ValidationException $e) {
        return response()->json([
            'status' => 'error',
            'message' => $e->errors(),
        ], 422);
    } catch (\Throwable $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Internal server error',
        ], 500);
    }
}

}