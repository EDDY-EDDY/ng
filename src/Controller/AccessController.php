<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AccessController extends Controller
{
    /**
     * @Route("/", name="login")
     */
    public function index(AuthenticationUtils $authUtils, Request $request)
    {

        // get the login error if there is one
        $error = $authUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authUtils->getLastUsername();

        return $this->render('access/index.html.twig', array(
            'last_username' => $lastUsername,
            'error'         => $error,

        ));
    }

    /**
     * Redirect users after login based on the granted ROLE
     * @Route("/login/redirect", name="_login_redirect")
     */
    public function loginRedirectAction()
    {
        $user = $this->getUser();

        if (!$this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY'))
        {
            return $this->redirectToRoute('login');
            // throw $this->createAccessDeniedException();
        }


        if ($this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('admin_dashboard');
        } else {
            return $this->redirectToRoute('login');
        }


    }
}
