<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Client;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Form');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
         $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|unique:clients,email',
            'phone' => 'required|string|max:20',
            'address' => 'nullable|string|max:255',
            'notes' => 'nullable|string',
            'clientReference' => 'nullable|string',
            'workInquiry' => 'nullable|string'
        ]);

        $client = Client::create([
            'firstName' => $request->input('firstName'),
            'lastName' => $request->input('lastName'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'address' => $request->input('address'),
            'notes' => $request->input('notes'),
            'clientReference' => $request->input('clientReference'),
            'workInquiry' => $request->input('workInquiry'),
            'extra_option' => [
                'lmia' => $request->input('lmia'),
                'pr' => $request->input('pr'),
                'pgwp' => $request->input('pgwp'),
                'coop' => $request->input('coop'),
                'visaSticker' => $request->input('visaSticker'),
                'visitorVisa' => $request->input('visitorVisa'),
                'spousalWp' => $request->input('spousalWp'),
                'lmiaApplication' => $request->input('lmiaApplication'),
                'studyPermit' => $request->input('studyPermit'),
                'studyPermitExtension' => $request->input('studyPermitExtension'),
                'admissionLetter' => $request->input('admissionLetter'),
                'lmiaWP' => $request->input('lmiaWP'),
            ],
        ]);

        // return response()->json([
        //     'message' => 'Client information saved successfully.',
        //     'client' => $client,
        //     'success' => true
        // ], 200);
        return redirect()->back()->with('message', 'Client information saved successfully.');

     } catch (\Exception $e) {
        // Log the exception message
        \Log::error('Error saving client information: ' . $e->getMessage());

        return redirect()->back()->with('message', 'An error occurred while saving client information');

        // return response()->json([
        //     'message' => 'An error occurred while saving client information.',
        //     'error' => $e->getMessage(),
        //     'success' => false
        // ], 500);
      }
    }

    public function ClientList(){
        $clients = Client::all();
        return Inertia::render('ClientList', [
            'clients' => $clients
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
