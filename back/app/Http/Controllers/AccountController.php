<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

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
                'icon_url' => null,
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
        }
        {
            dd($request->all());
        }
    }
}
