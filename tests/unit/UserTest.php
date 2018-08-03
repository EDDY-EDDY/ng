<?php
/**
 * Created by PhpStorm.
 * User: eddyu.
 * Date: 02/08/2018
 * Time: 10:43 PM
 */

class UserTest extends PHPUnit\Framework\TestCase
{

    private $first_name  = "John";
    private $last_name = "Doe";
    private $email = "info@pglnigeria.com";


    public function testFirstName()
    {

        $user = new \App\Entity\User();

        $user->setFirstName($this->first_name);

        $this->assertEquals($user->getFirstName(), $this->first_name);

    }

    public function testLastName()
    {

        $user = new \App\Entity\User();

        $user->setLastName($this->last_name);

        $this->assertEquals($user->getLastName(), $this->last_name);

    }

    public function testEmail()
    {

        $user = new \App\Entity\User();

        $user->setEmail($this->email);

        $this->assertEquals($user->getEmail(), $this->email);

    }

    public function testIsActive()
    {

        $user = new \App\Entity\User();

        $user->setIsActive(1);

        $this->assertEquals($user->getisActive(), '1');

    }


    public function testUsername()
    {
        $user = new \App\Entity\User();

        $user->setUsername($this->first_name);

        $this->assertEquals($user->getUsername(), $this->first_name);
    }

    public function testRoles()
    {
        $user = new \App\Entity\User();

        $user->setRoles('ROLE_USER');

        $this->assertContains('ROLE_USER', $user->getRoles());
    }   

}