<?php


namespace App\Model\AppException;


class AppExceptionMessages
{
    // project
    const PROJECT_DOES_NOT_EXIST = "Project does not exist";

    // document
    const FILE_TYPE_NOT_SUPPORTED = "File type not supported";
    const FILE_IS_TOO_LARGE = "File size is more than 10MB";

    // user
    const DOES_NOT_EXIST = "Does not exist";

    // client
    const CLIENT_NAME_EXISTS = "Client name already exists";

    // general
    const GENERAL_ERROR_MESSAGE = "An error occurred, please try again. If this message persists, please contact support.";
    const FILL_ALL_DETAILS = "Fill in all details";


}