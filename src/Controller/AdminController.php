<?php

namespace App\Controller;

use App\Entity\Designation;
use App\Entity\Organization;
use App\Entity\Participant;
use App\Entity\User;
use App\Model\AppException\AppException;
use App\Model\AppException\AppExceptionMessages;
use App\Services\ParticipantService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AdminController extends Controller
{
    /**
     * @Route("/admin", name="admin_dashboard")
     */
    public function index()
    {
        $page_title = "Dashboard";


        $designation = $this->getDoctrine()
            ->getRepository(Designation::class)
            ->findAll();

        $participants = $this->getDoctrine()
            ->getRepository(Participant::class)
            ->findAll();

        $organizations = $this->getDoctrine()
            ->getRepository(Organization::class)
            ->findAll();

        return $this->render('admin/index.html.twig', [
            'page_title' => $page_title,
            'designation' => $designation,
            'participants' => $participants,
            'organizations' => $organizations,
        ]);
    }


    /**
     * @Route("/admin/participants", name="admin_participants")
     */
    public function admin_participants()
    {
        $page_title = "Participants";


        $participants = $this->getDoctrine()
            ->getRepository(Participant::class)
            ->findBy([
                'record_status' => 'active'
            ]);

        return $this->render('admin/participants.html.twig', [
            'page_title' => $page_title,
            'participants' => $participants
        ]);
    }

    /**
     * @Route("/admin/report", name="admin_report")
     */
    public function admin_report()
    {
        $page_title = "Report";


        $participants = $this->getDoctrine()
            ->getRepository(Participant::class)
            ->findBy([
                'record_status' => 'active'
            ]);

        return $this->render('admin/report.html.twig', [
            'page_title' => $page_title,
            'participants' => $participants
        ]);
    }


    /**
     * @Route("/admin/register_participants", name="admin_register_participants")
     */
    public function register_participants(Request $request, ParticipantService $participantService)
    {
        $page_title = "Register Participants";



        $desig = $this->getDoctrine()
            ->getRepository(Designation::class)
            ->findAll();

        $org = $this->getDoctrine()
            ->getRepository(Organization::class)
            ->findAll();


        $fname = $request->request->get('firstname');
        $lname = $request->request->get('lastname');
        $gender = $request->request->get('gender');
        $address = $request->request->get('address');


        $phone = $request->request->get('phone');
        $email = $request->request->get('email');
        $location = $request->request->get('location');

        $designation = $request->request->get('designation');
        $designation_text = $request->request->get('designation_text');
        $organization = $request->request->get('organization');
        $organization_text = $request->request->get('organization_text');




        if(!empty($fname)) {

            try {


                $response = $participantService->add_participant($fname, $lname, $gender, $address, $phone, $email, $organization, $organization_text, $designation, $designation_text, $location);



                if($response['status'] == 'Participant Registered')
                {
                    $this->addFlash('success', "Registered Now");

                    return $this->redirectToRoute('admin_register_complete', [
                        'selector' => $response['selector']
                    ]);

                }


            } catch (AppException $e) {

                $errorMessage = $e->getMessage();

                switch ($errorMessage) {

                    case AppExceptionMessages::DOES_NOT_EXIST;
                        break;
                    default:
                        $errorMessage = AppExceptionMessages::GENERAL_ERROR_MESSAGE;
                        break;
                }

                $this->addFlash('error', $e->getMessage());


            }
        }

        return $this->render('admin/register.html.twig', [
            'page_title' => $page_title,
            'desig' => $desig,
            'org' => $org
        ]);
    }


    /**
     * @Route("/admin/register_complete/{selector}", name="admin_register_complete")
     */
    public function admin_register_complete($selector)
    {
        $page_title = "Admin Participants";

        $us = $this->getDoctrine()
            ->getRepository(Participant::class)
            ->findOneBy([
                'selector' => $selector
            ]);

        return $this->render('admin/register_complete.html.twig', [
            'page_title' => $page_title,
            'duser' => $us
        ]);
    }


    /**
     * @Route("/admin/participant/{selector}/edit", name="admin_edit_participant")
     */
    public function edit_participant(Request $request, $selector, ParticipantService $participantService)
    {
        $page_title = "Edit Participants";


        $participant = $this->getDoctrine()
            ->getRepository(Participant::class)
            ->findOneBy([
               'selector' => $selector
            ]);


        $desig = $this->getDoctrine()
            ->getRepository(Designation::class)
            ->findAll();

        $org = $this->getDoctrine()
            ->getRepository(Organization::class)
            ->findAll();


        $fname = $request->request->get('firstname');
        $lname = $request->request->get('lastname');
        $gender = $request->request->get('gender');
        $address = $request->request->get('address');


        $phone = $request->request->get('phone');
        $email = $request->request->get('email');
        $location = $request->request->get('location');

        $designation = $request->request->get('designation');
        $designation_text = $request->request->get('designation_text');
        $organization = $request->request->get('organization');
        $organization_text = $request->request->get('organization_text');




        if(!empty($fname)) {

            try {


                $response = $participantService->edit_participant($participant, $fname, $lname, $gender, $address, $phone, $email, $organization, $organization_text, $designation, $designation_text, $location);



                if($response['status'] == 'Participant Info Updated')
                {
                    $this->addFlash('success', "Participant Info Updated");

                    return $this->redirectToRoute('admin_participants');

                }


            } catch (AppException $e) {

                $errorMessage = $e->getMessage();

                switch ($errorMessage) {

                    case AppExceptionMessages::DOES_NOT_EXIST;
                        break;
                    default:
                        $errorMessage = AppExceptionMessages::GENERAL_ERROR_MESSAGE;
                        break;
                }

                $this->addFlash('error', $e->getMessage());


            }
        }

        return $this->render('admin/edit_participant.html.twig', [
            'page_title' => $page_title,
            'desig' => $desig,
            'participant' => $participant,
            'org' => $org
        ]);
    }



    /**
     * @Route("/admin/participant/{selector}/delete", name="admin_delete_participant")
     */
    public function admin_delete_participant($selector, ParticipantService $participantService)
    {
        $page_title = "Admin Participants";

        $us = $this->getDoctrine()
            ->getRepository(Participant::class)
            ->findOneBy([
                'selector' => $selector
            ]);


        $participantService->delete_participant($us);


        $participants = $this->getDoctrine()
            ->getRepository(Participant::class)
            ->findBy([
                'record_status' => 'active'
            ]);

        return $this->render('admin/participants.html.twig', [
            'page_title' => $page_title,
            'duser' => $us,
            'participants' => $participants
        ]);
    }


    /**
     * @Route("/admin/participant/{selector}/capture", name="admin_participant_capture")
     */
    public function admin_participant_capture($selector, Request $request)
    {
        $page_title = "Capture Photo";


        $us = $this->getDoctrine()
            ->getRepository(Participant::class)
            ->findOneBy([
                'selector' => $selector
            ]);


        $data = $request->request->get('myfile');

        if(!empty($data))
        {



            $imgData = str_replace(' ','+',$data);
            $imgData =  substr($imgData,strpos($imgData,",")+1);
            $imgData = base64_decode($imgData);
            $filename = strtotime('now')+rand(0,99099999);
// Path where the image is going to be saved
            $filePath = '../public/files/'.$filename.".jpg";
// Write $imgData into the image file
            $file = fopen($filePath, 'w');

                fwrite($file, $imgData);
                fclose($file);

                $us->setPicture('files/' . $filename . ".jpg");
                $this->getDoctrine()->getManager()->flush($us);


        }

        return $this->render('admin/capture.html.twig', [
            'page_title' => $page_title,
            'duser' => $us
        ]);
    }



    /**
     * @Route("/admin/slip/{selector}", name="admin_print_slip")
     */
    public function admin_print_slip($selector = null, Request $request)
    {
        $page_title = "Print Slip";



        if($request->request->get('reg_code')) {

            $us = $this->getDoctrine()->getRepository(Participant::class)
                ->findOneBy([
                    'code' => $request->request->get('reg_code')
                ]);
        }else{
            $us = $this->getDoctrine()
                ->getRepository(Participant::class)
                ->findOneBy([
                    'selector' => $selector
                ]);
        }

        return $this->render('admin/print_slip.html.twig', [
            'page_title' => $page_title,
            'duser' => $us
        ]);
    }




    /**
     * @Route("/admin/mass_attended", name="mass_attended")
     */
    public function mass_attended()
    {

        $array = array(
            [
                'mda_name' => 'Lake Chad Research Institute',
                'mda_code' => '102515'
            ]


        );


        foreach($array as $arr)
        {
            $mda_name = $arr['mda_name'];
            $mda_code = $arr['mda_code'];

            $data_array = [
                'mdaName' => $mda_name,
                'mdaCode' => $mda_code,
                'mdaAbbrev' => ''
            ];

            $json_body = json_encode($data_array);

            $data = [ 'mda_json' => $json_body ];

            $response = $this->CallAPI('POST','http://federalcharacter.gov.ng/portal_training/web/integration/organization',$data);

            $result = json_decode($response);

            echo"<p>$mda_name</p> <br>";
            print_r($result);
            echo " <hr>";
        }

        return new response('--');

    }


    public function CallAPI($method, $url, $data = false)
    {
        $curl = curl_init();

        switch ($method)
        {
            case "POST":
                curl_setopt($curl, CURLOPT_POST, 1);

                if ($data)
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                break;
            case "PUT":
                curl_setopt($curl, CURLOPT_PUT, 1);
                break;
            default:
                if ($data)
                    $url = sprintf("%s?%s", $url, http_build_query($data));
        }

        // Optional Authentication:
        curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($curl, CURLOPT_USERPWD, "username:password");

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($curl);

        curl_close($curl);

        return $result;
    }

}